import express from "express";
import { createCourse } from "../controllers/courseController";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = express.Router();

router.route("/").post(isAuthenticated,createCourse)

export default router;
