const express = require("express");
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllStudents).post(protect, createStudent);
router.route("/:id").get(getStudentById).put(protect, updateStudent).delete(protect, deleteStudent);

module.exports = router;
