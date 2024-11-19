import express from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/profile/:id").get(isAuthenticated,logoutUser);

export default router;
