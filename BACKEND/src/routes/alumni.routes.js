const express = require("express");
const {
  getAllAlumni,
  getAlumniById,
  createAlumni,
  createAlumniRegistration,
  updateAlumni,
  deleteAlumni,
} = require("../controllers/alumni.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/register").post(createAlumniRegistration);
router.route("/").get(getAllAlumni).post(protect, createAlumni);
router.route("/:id").get(getAlumniById).put(protect, updateAlumni).delete(protect, deleteAlumni);

module.exports = router;
