const mongoose = require("mongoose");

const campusLifeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Campus life title is required"],
      trim: true,
      maxlength: 180,
    },
    category: {
      type: String,
      enum: ["event", "club", "activity"],
      required: [true, "Campus life category is required"],
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const CampusLife =
  mongoose.models.CampusLife || mongoose.model("CampusLife", campusLifeSchema);

module.exports = CampusLife;
