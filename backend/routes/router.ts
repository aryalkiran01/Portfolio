// routes/meeting
import express from "express";
import {
  createMeeting,
  listMeetings,
  sendContactEmail,
} from "../controllers/zohocontroller";

const router = express.Router();

router.post("/create", createMeeting);
router.get("/", listMeetings);
router.post("/contact", sendContactEmail);
export default router;
