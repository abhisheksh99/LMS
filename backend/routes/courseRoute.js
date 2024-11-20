import express from "express";
import { createCourse, editCourse, getCourseById, getCreatorCourses } from "../controllers/courseController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import upload from "../utils/multer.js"
import { createLecture, getCourseLecture } from "../controllers/lectureController.js";


const router = express.Router();

router.route("/").post(isAuthenticated,createCourse)
router.route("/").get(isAuthenticated,getCreatorCourses)
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);


// For Lectures
router.route("/:courseId/lecture").post(isAuthenticated, createLecture);
router.route("/:courseId/lecture").get(isAuthenticated, getCourseLecture);

export default router;
