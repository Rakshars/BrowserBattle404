const mongoose = require("mongoose");
const slugify = require("slugify");

const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Faculty name is required"],
      trim: true,
      maxlength: 120,
    },
    designation: {
      type: String,
      required: [true, "Faculty designation is required"],
      trim: true,
      maxlength: 120,
    },
  },
  { _id: false }
);

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Department name is required"],
      trim: true,
      unique: true,
      maxlength: 150,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
    },
    hod: {
      type: String,
      trim: true,
      maxlength: 120,
    },
    faculty: {
      type: [facultySchema],
      default: [],
    },
    labs: {
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

departmentSchema.pre("save", function departmentSlugHook(next) {
  if (this.isModified("name") || !this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true, trim: true });
  }
  next();
});

const Department =
  mongoose.models.Department || mongoose.model("Department", departmentSchema);

module.exports = Department;
