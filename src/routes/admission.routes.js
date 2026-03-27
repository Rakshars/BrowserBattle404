const express = require("express");
const {
  getAllAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
} = require("../controllers/admission.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllAdmissions).post(protect, createAdmission);
router.route("/:id").get(getAdmissionById).put(protect, updateAdmission).delete(protect, deleteAdmission);

module.exports = router;
