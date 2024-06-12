import { Router } from "express";
import { createUser, getCurrentUser, updateUser } from "../controllers/user";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserProfile } from "../middleware/validation";

const router = Router();

router.route("/").get(jwtCheck, jwtParse, getCurrentUser);
router.route("/").post(jwtCheck, createUser)
router.route("/profile-update").put(
  jwtCheck, 
  jwtParse, 
  validateUserProfile, 
  updateUser
);

export default router;