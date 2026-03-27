const Department = require("../models/department.model");
const asyncHandler = require("../middleware/asyncHandler");
const { getAll, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllDepartments = getAll(Department);

const getDepartmentBySlug = asyncHandler(async (req, res) => {
  const data = await Department.findOne({ slug: req.params.slug });

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Department not found",
    });
  }

  return res.status(200).json({ success: true, data });
});

const createDepartment = createOne(Department);
const updateDepartment = updateById(Department);
const deleteDepartment = deleteById(Department);

module.exports = {
  getAllDepartments,
  getDepartmentBySlug,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
