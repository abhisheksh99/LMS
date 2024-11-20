import asyncHandler from "express-async-handler";
import Lecture from "../models/lectureModel.js";
import Course from "../models/courseModel.js"; 

export const createLecture = asyncHandler(async (req, res) => {
    const { lectureTitle } = req.body;
    const { courseId } = req.params;

    if (!lectureTitle || !courseId) {
        return res.status(400).json({ message: "Lecture title and course ID are required.", success: false });
    }

    const lecture = await Lecture.create({ lectureTitle });

    const course = await Course.findById(courseId);
    if (course) {
        course.lectures.push(lecture._id); // Use lecture._id to reference the newly created lecture
        await course.save();
        return res.status(201).json({ message: "Lecture created successfully.", success: true, lecture });
    } else {
        return res.status(404).json({ message: "Course not found.", success: false });
    }
});

export const getCourseLecture = asyncHandler(async (req, res) => {
    const { courseId } = req.params;

    if (!courseId) {
        return res.status(400).json({ message: "Course ID is required.", success: false });
    }

    const course = await Course.findById(courseId).populate("lectures");
    if (!course) {
        return res.status(404).json({ message: "Course not found.", success: false });
    }

    return res.status(200).json({ message: "Lectures retrieved successfully.", success: true, lectures: course.lectures });
});