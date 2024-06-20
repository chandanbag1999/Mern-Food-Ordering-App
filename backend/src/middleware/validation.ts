import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handelValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };
  next();
};

export const validateUserProfile = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1").isString().notEmpty().withMessage("Address Line 1 must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),
  handelValidationErrors,
]; 

export const validateRestaurantProfile = [
  body("restaurantName").notEmpty().withMessage("Restaurant Name is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("deliveryFee")
    .isFloat({ min: 0 })
    .withMessage("Delivery fee must be a non-negative number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .withMessage("Estimated delivery time must be a non-negative integer"),
  body("cuisines").isArray().withMessage("Cuisines must be an array").not().isEmpty().withMessage("Cuisines cannot be empty"),
  body("menuItems").isArray().withMessage("Menu items must be an array"),
  body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("Menu item price must be a non-negative number"),
  handelValidationErrors,
];