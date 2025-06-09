// routes/meeting.js
const express = require("express");
import { createMeeting, listMeetings, sendContactEmail, } from "../controllers/zohocontroller.js";
const router = express.Router();
router.post("/create", createMeeting);
router.get("/", listMeetings);
router.post("/contact", sendContactEmail);
export default router;
