const express = require("express");
const {
  getAllResearch,
  getResearchById,
  createResearch,
  updateResearch,
  deleteResearch,
} = require("../controllers/research.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllResearch).post(protect, createResearch);
router.route("/:id").get(getResearchById).put(protect, updateResearch).delete(protect, deleteResearch);

module.exports = router;
