const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      maxlength: 120,
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
      maxlength: 120,
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
      min: 1,
      max: 10,
    },
    achievements: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = Student;
