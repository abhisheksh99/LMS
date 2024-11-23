import asyncHandler from "express-async-handler";
import CourseProgress from "../models/courseProgressModel.js";
import Course from "../models/courseModel.js";

export const getCourseProgress = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const userId = req.id;

  let courseProgress = await CourseProgress.findOne({
    courseId,
    userId,
  }).populate("courseId");

  const courseDetails = await Course.findById(courseId).populate("lectures");

  if (!courseDetails) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  if (!courseProgress) {
    return res.status(200).json({
      data: {
        courseDetails,
        progress: [],
        completed: false,
      },
    });
  }

  return res.status(200).json({
    data: {
      courseDetails,
      progress: courseProgress.lectureProgress,
      completed: courseProgress.completed,
    },
  });
});

export const updateLectureProgress = asyncHandler(async (req, res) => {
  const { courseId, lectureId } = req.params;
  const userId = req.id;

  let courseProgress = await CourseProgress.findOne({ courseId, userId });

  if (!courseProgress) {
    courseProgress = new CourseProgress({
      userId,
      courseId,
      completed: false,
      lectureProgress: [],
    });
  }

  const lectureIndex = courseProgress.lectureProgress.findIndex(
    (lecture) => lecture.lectureId === lectureId
  );

  if (lectureIndex !== -1) {
    courseProgress.lectureProgress[lectureIndex].viewed = true;
  } else {
    courseProgress.lectureProgress.push({
      lectureId,
      viewed: true,
    });
  }

  const lectureProgressLength = courseProgress.lectureProgress.filter(
    (lectureProg) => lectureProg.viewed
  ).length;

  const course = await Course.findById(courseId);

  if (course.lectures.length === lectureProgressLength)
    courseProgress.completed = true;

  await courseProgress.save();

  return res.status(200).json({
    message: "Lecture progress updated successfully.",
  });
});

export const markAsCompleted = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const userId = req.id;

  const courseProgress = await CourseProgress.findOne({ courseId, userId });
  if (!courseProgress)
    return res.status(404).json({ message: "Course progress not found" });

  courseProgress.lectureProgress.forEach(
    (lectureProgress) => (lectureProgress.viewed = true)
  );
  courseProgress.completed = true;
  await courseProgress.save();
  return res.status(200).json({ message: "Course marked as completed." });
});

export const markAsInCompleted = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const userId = req.id;

  const courseProgress = await CourseProgress.findOne({ courseId, userId });
  if (!courseProgress)
    return res.status(404).json({ message: "Course progress not found" });

  courseProgress.lectureProgress.forEach(
    (lectureProgress) => (lectureProgress.viewed = false)
  );
  courseProgress.completed = false;
  await courseProgress.save();
  return res.status(200).json({ message: "Course marked as incompleted." });
});