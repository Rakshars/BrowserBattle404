const mongoose = require("mongoose");
const validator = require("validator");

const alumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Alumni name is required"],
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      sparse: true,
      validate: {
        validator(value) {
          return !value || validator.isEmail(value);
        },
        message: "Email must be a valid email address",
      },
    },
    graduationYear: {
      type: Number,
      required: [true, "Graduation year is required"],
      min: 1900,
      max: 2100,
    },
    studyStartYear: {
      type: Number,
      min: 1900,
      max: 2100,
    },
    studyEndYear: {
      type: Number,
      min: 1900,
      max: 2100,
    },
    course: {
      type: String,
      trim: true,
      maxlength: 140,
    },
    currentStatus: {
      type: String,
      trim: true,
      maxlength: 220,
    },
    company: {
      type: String,
      trim: true,
      maxlength: 120,
    },
    role: {
      type: String,
      trim: true,
      maxlength: 120,
    },
    testimonial: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

alumniSchema.index({ email: 1 }, { unique: true, sparse: true });

const Alumni = mongoose.models.Alumni || mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
