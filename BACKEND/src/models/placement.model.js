const mongoose = require("mongoose");

const placementStatsSchema = new mongoose.Schema(
  {
    placedStudents: {
      type: Number,
      min: 0,
      default: 0,
    },
    percentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  { _id: false }
);

const placementSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: [true, "Placement year is required"],
      min: 2000,
      max: 2100,
      unique: true,
      index: true,
    },
    highestPackage: {
      type: Number,
      min: 0,
      default: 0,
    },
    averagePackage: {
      type: Number,
      min: 0,
      default: 0,
      validate: {
        validator(value) {
          return value <= this.highestPackage;
        },
        message: "Average package cannot be greater than highest package",
      },
    },
    recruiters: {
      type: [String],
      default: [],
    },
    stats: {
      type: placementStatsSchema,
      default: () => ({}),
    },
  },
  { timestamps: true }
);

const Placement =
  mongoose.models.Placement || mongoose.model("Placement", placementSchema);

module.exports = Placement;
