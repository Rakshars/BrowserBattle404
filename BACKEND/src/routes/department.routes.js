const express = require("express");
const {
  getAllDepartments,
  getDepartmentBySlug,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/department.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllDepartments).post(protect, createDepartment);
router.route("/:slug").get(getDepartmentBySlug);
router.route("/:id").put(protect, updateDepartment).delete(protect, deleteDepartment);

module.exports = router;
