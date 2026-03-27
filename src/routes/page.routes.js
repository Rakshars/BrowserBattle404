const express = require("express");
const {
  getAllPages,
  getPageBySlug,
  createPage,
  updatePage,
  deletePage,
} = require("../controllers/page.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllPages).post(protect, createPage);
router.route("/:slug").get(getPageBySlug);
router.route("/:id").put(protect, updatePage).delete(protect, deletePage);

module.exports = router;
