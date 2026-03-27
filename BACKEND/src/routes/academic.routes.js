const express = require("express");
const {
  getAllAcademics,
  getAcademicById,
  createAcademic,
  updateAcademic,
  deleteAcademic,
} = require("../controllers/academic.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllAcademics).post(protect, createAcademic);
router.route("/:id").get(getAcademicById).put(protect, updateAcademic).delete(protect, deleteAcademic);

module.exports = router;
