import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());
app.use(cors());


app.get("/test",(req: Request, res: Response) =>{
  res.json({message: "hello"});
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});