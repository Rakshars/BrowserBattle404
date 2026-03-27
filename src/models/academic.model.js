const mongoose = require("mongoose");

const academicSchema = new mongoose.Schema(
  {
    programName: {
      type: String,
      enum: ["UG", "PG", "PhD"],
      required: [true, "Program name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    courses: {
      type: [String],
      default: [],
    },
    duration: {
      type: String,
      trim: true,
    },
    eligibility: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Academic = mongoose.models.Academic || mongoose.model("Academic", academicSchema);

module.exports = Academic;
