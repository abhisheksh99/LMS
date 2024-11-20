import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import courseRoutes from "./routes/courseRoute.js";
import mediaRoutes from "./routes/mediaRoute.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//Db connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/media", mediaRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
