import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectroutes.js";
import meetingRoutes from "./routes/router.js";
import sendContactEmail from "./routes/router.js";
dotenv.config();
const app = express();
// Connect to MongoDB (directly here)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};
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
