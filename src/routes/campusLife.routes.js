const express = require("express");
const {
  getAllCampusLife,
  getCampusLifeById,
  createCampusLife,
  updateCampusLife,
  deleteCampusLife,
} = require("../controllers/campusLife.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllCampusLife).post(protect, createCampusLife);
router.route("/:id").get(getCampusLifeById).put(protect, updateCampusLife).delete(protect, deleteCampusLife);

module.exports = router;
