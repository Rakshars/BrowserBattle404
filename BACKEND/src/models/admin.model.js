const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
        message: "Please provide a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      default: "admin",
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function adminPasswordHashHook(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  return next();
});

adminSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

module.exports = Admin;
