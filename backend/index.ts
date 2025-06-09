import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import meetingRoutes from "./routes/router.js";
import sendContactEmail from "./routes/router.js";

dotenv.config();
const app = express();

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-b88z1ado1-aryalkiran01s-projects.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.options("*", cors());
app.use(express.json());

// Routes
app.use("/api/meetings", meetingRoutes);
app.post("/api/contact", sendContactEmail);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

// Connect DB and Start Server
const startServer = async (): Promise<void> => {
  await connectDB();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
