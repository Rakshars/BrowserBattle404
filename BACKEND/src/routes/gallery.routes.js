const express = require("express");
const {
  getAllGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/gallery.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllGallery).post(protect, createGallery);
router.route("/:id").get(getGalleryById).put(protect, updateGallery).delete(protect, deleteGallery);

module.exports = router;
