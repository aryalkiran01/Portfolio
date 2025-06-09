import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/projectroutes";
import meetingRoutes from "./routes/router";
import sendContactEmail from "./routes/router";
dotenv.config();
const app = express();
// CORS setup
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://portfolio-eosin-two-15.vercel.app",
    ],
    credentials: true,
}));
app.use(express.json());
// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/meetings", meetingRoutes);
app.post("/api/contact", sendContactEmail);
app.get("/", (req, res) => {
    res.send("API is running...");
});
// Connect DB and Start Server
const startServer = async () => {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};
startServer();
