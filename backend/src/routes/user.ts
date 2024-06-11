import { Router } from "express";
import { createUser } from "../controllers/user";
import { jwtCheck } from "../middleware/auth";

const router = Router();

router.route("/").post(jwtCheck, createUser)

export default router;