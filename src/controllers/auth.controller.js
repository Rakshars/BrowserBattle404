const Admin = require("../models/admin.model");
const asyncHandler = require("../middleware/asyncHandler");
const generateToken = require("../utils/generateToken");

const getAllAdmins = asyncHandler(async (req, res) => {
  const data = await Admin.find().select("-password").sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
});

const getAdminById = asyncHandler(async (req, res) => {
  const data = await Admin.findById(req.params.id).select("-password");

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  return res.status(200).json({ success: true, data });
});

const createAdmin = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const data = await Admin.create({ email, password, role });
  const safeAdmin = data.toObject();
  delete safeAdmin.password;

  return res.status(201).json({ success: true, data: safeAdmin });
});

const updateAdmin = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const admin = await Admin.findById(req.params.id).select("+password");

  if (!admin) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  if (email !== undefined) admin.email = email;
  if (role !== undefined) admin.role = role;
  if (password !== undefined) admin.password = password;

  const data = await admin.save();
  const safeAdmin = data.toObject();
  delete safeAdmin.password;

  return res.status(200).json({ success: true, data: safeAdmin });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const data = await Admin.findByIdAndDelete(req.params.id);

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Admin not found",
    });
  }

  return res.status(200).json({ success: true, data: null });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const admin = await Admin.findOne({ email }).select("+password");

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const isValidPassword = await admin.comparePassword(password);

  if (!isValidPassword) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = generateToken(admin);
  const safeAdmin = admin.toObject();
  delete safeAdmin.password;

  return res.status(200).json({
    success: true,
    data: {
      admin: safeAdmin,
      token,
    },
  });
});

module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  login,
};
