import { Request, Response } from "express";
import { Restaurant } from "../models/restaurant";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

export default async function createRestaurant(req: Request, res: Response) {
  try {
    const existingRestaurant = await Restaurant.findOne({ user: req.userId });

    if (existingRestaurant) {
      return res.status(409).json({ message: "Restaurant already exists" });
    }

    const image = req.file as Express.Multer.File;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;

    const uploadImage = await cloudinary.v2.uploader.upload(dataURI);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = uploadImage.url;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();

    await restaurant.save();

    res.status(201).json(restaurant.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating restaurant" });
  }
}
