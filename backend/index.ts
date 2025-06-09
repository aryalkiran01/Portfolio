import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.ts";
import projectRoutes from "./routes/projectroutes.ts";
import meetingRoutes from "./routes/router.ts";
import sendContactEmail from "./routes/router.ts";

dotenv.config();

const app = express();

// CORS setup
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
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
