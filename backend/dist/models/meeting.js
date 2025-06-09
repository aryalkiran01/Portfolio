// models/meeting.js
import mongoose from "mongoose";
const MeetingSchema = new mongoose.Schema({
    topic: String,
    agenda: String,
    presenter: String,
    date: Date,
    duration: Number,
    timezone: String,
    meetingId: String,
    joinUrl: String,
    startUrl: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const Meeting = mongoose.model("Meeting", MeetingSchema);
export default Meeting;
