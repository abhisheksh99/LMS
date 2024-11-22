import mongoose from "mongoose";
const coursePurchaseSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "FAILED"], 
      default: "PENDING", 
    },
    paymentId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const CoursePurchase = mongoose.model("CoursePurchase", coursePurchaseSchema);

export default CoursePurchase;
