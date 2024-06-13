import mongoose, { Schema } from "mongoose";

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
}, { timestamps: true });


const restaurantSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  restaurantName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  deliveryFee: {
    type: Number,
    required: true
  },
  estimatedDeliveryTime: {
    type: Number,
    required: true
  },
  cuisines: [{
    type: String,
    required: true
  }],
  menuItems: [menuItemSchema],
  imageUrl: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: Date,
    required: true
  },
}, { timestamps: true });


export const Restaurant = mongoose.model("Restaurant", restaurantSchema);