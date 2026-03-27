const mongoose = require("mongoose");

const importantDateSchema = new mongoose.Schema(
  {
    event: {
      type: String,
      required: [true, "Event name is required"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { _id: false }
);

const admissionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Admission title is required"],
      trim: true,
      maxlength: 180,
    },
    description: {
      type: String,
      trim: true,
    },
    eligibility: {
      type: String,
      trim: true,
    },
    processSteps: {
      type: [String],
      default: [],
    },
    importantDates: {
      type: [importantDateSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Admission =
  mongoose.models.Admission || mongoose.model("Admission", admissionSchema);

module.exports = Admission;
