import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/user";
import {v2 as cloudinary} from 'cloudinary';
import myRestaurantRoute from "./routes/restaurant";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "health Ok!" });
});

app.use("/api/v1/users", myUserRoute)
app.use("/api/v1/restaurant", myRestaurantRoute);


app.listen(3000, () => {
  console.log("Server started on port 3000");
});