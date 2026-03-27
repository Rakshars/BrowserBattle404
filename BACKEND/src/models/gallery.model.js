const mongoose = require("mongoose");
const validator = require("validator");

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Gallery title is required"],
      trim: true,
      maxlength: 180,
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
      validate: {
        validator(value) {
          return validator.isURL(value, { require_protocol: true });
        },
        message: "Image URL must be a valid URL with protocol",
      },
    },
    category: {
      type: String,
      enum: ["campus", "events", "labs"],
      required: [true, "Gallery category is required"],
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
