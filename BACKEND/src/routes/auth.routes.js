const express = require("express");
const {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  login,
} = require("../controllers/auth.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);

router.route("/admins").get(protect, getAllAdmins).post(protect, createAdmin);
router.route("/admins/:id").get(protect, getAdminById).put(protect, updateAdmin).delete(protect, deleteAdmin);

module.exports = router;
