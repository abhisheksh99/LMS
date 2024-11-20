import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true
    },
    courseLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
    coursePrice: {
      type: Number,
      default: 0
    },
    courseThumbnail: {
      type: String
    },
    enrolledStudents: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture"
      }
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    isPublished: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;