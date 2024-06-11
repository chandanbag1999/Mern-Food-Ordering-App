import { Router } from "express";
import { createUser, updateUser } from "../controllers/user";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserProfile } from "../middleware/validation";

const router = Router();

router.route("/").post(jwtCheck, createUser)
router.route("/profile-update").put(
  jwtCheck, 
  jwtParse, 
  validateUserProfile, 
  updateUser
);

export default router;