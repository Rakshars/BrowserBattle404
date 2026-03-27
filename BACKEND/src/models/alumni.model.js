const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Alumni name is required"],
      trim: true,
      maxlength: 120,
    },
    graduationYear: {
      type: Number,
      required: [true, "Graduation year is required"],
      min: 1900,
      max: 2100,
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

const Alumni = mongoose.models.Alumni || mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
