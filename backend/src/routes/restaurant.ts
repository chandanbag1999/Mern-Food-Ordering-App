import { Router } from "express";
import createRestaurant from "../controllers/restaurant";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateRestaurantProfile } from "../middleware/validation";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 *1024, // 5mb
  },
});

router.route("/").post(
  upload.single("imageFile"), 
  validateRestaurantProfile,
  jwtCheck,
  jwtParse,
  createRestaurant
);

export default router;