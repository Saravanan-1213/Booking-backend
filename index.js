import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./routes/users.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

// middlewares

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(PORT, () => console.log("Server started", PORT));
