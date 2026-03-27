const Student = require("../models/student.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllStudents = getAll(Student);
const getStudentById = getById(Student);
const createStudent = createOne(Student);
const updateStudent = updateById(Student);
const deleteStudent = deleteById(Student);

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
