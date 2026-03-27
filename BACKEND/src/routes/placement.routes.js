const express = require("express");
const {
  getAllPlacements,
  getPlacementById,
  createPlacement,
  updatePlacement,
  deletePlacement,
} = require("../controllers/placement.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllPlacements).post(protect, createPlacement);
router.route("/:id").get(getPlacementById).put(protect, updatePlacement).delete(protect, deletePlacement);

module.exports = router;
