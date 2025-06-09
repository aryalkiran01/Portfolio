// controllers/zohocontroller
import axios from "axios";
import { format } from "date-fns";
import Meeting from "../models/meeting";
import transporter from "../config/mailer";
import { getAccessToken } from "../config/getAccessToken";
const ZOHO_API_URL = "https://meeting.zoho.com/api/v2/877717138/sessions.json";
export const createMeeting = async (req, res) => {
    try {
        const { topic, agenda, presenter, date, duration, timezone, participants } = req.body;
        if (!topic || !presenter || !date) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const formattedDate = format(new Date(date), "MMM d, yyyy hh:mm a");
        const existingMeeting = await Meeting.findOne({ date: formattedDate });
        if (existingMeeting) {
            res
                .status(400)
                .json({ error: "A meeting is already scheduled at this time." });
            return;
        }
        const accessToken = await getAccessToken();
        const { data } = await axios.post(ZOHO_API_URL, {
            session: {
                topic,
                agenda,
                presenter,
                startTime: formattedDate,
                duration,
                timezone,
                participants,
            },
        }, {
            headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
                "Content-Type": "application/json",
            },
        });
        const meeting = await Meeting.create({
            topic,
            agenda,
            presenter,
            date: formattedDate,
            duration,
            timezone,
            meetingId: data.session_id,
            joinUrl: data.join_url,
            startUrl: data.start_url,
        });
        res.status(201).json(meeting);
    }
    catch (err) {
        res.status(err.response?.status || 500).json({
            error: "Failed to create meeting",
            details: err.response?.data || err.message,
        });
    }
};
export const listMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.find();
        res.status(200).json(meetings);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching meetings" });
    }
};
export const sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }
    try {
        await transporter.sendMail({
            from: process.env.ZOHO_MAIL_USER,
            to: process.env.ZOHO_MAIL_USER,
            subject: `📩 New Contact from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
        });
        res.status(200).json({ success: "Email sent successfully" });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Email sending failed", details: error.message });
    }
};
