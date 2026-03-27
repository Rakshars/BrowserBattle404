const mongoose = require("mongoose");

const researchSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Research title is required"],
      trim: true,
      maxlength: 220,
    },
    type: {
      type: String,
      enum: ["project", "patent", "publication"],
      required: [true, "Research type is required"],
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    year: {
      type: Number,
      min: 1900,
      max: 2100,
    },
  },
  { timestamps: true }
);

const Research = mongoose.models.Research || mongoose.model("Research", researchSchema);

module.exports = Research;
