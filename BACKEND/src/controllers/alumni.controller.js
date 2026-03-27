const Alumni = require("../models/alumni.model");
const asyncHandler = require("../middleware/asyncHandler");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllAlumni = getAll(Alumni);
const getAlumniById = getById(Alumni);
const createAlumni = createOne(Alumni);
const updateAlumni = updateById(Alumni);
const deleteAlumni = deleteById(Alumni);

const createAlumniRegistration = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    graduationYear,
    studyStartYear,
    studyEndYear,
    course,
    currentStatus,
  } = req.body;

  if (!name || !email || !graduationYear || !course || !currentStatus) {
    return res.status(400).json({
      success: false,
      message: "name, email, graduationYear, course, and currentStatus are required",
    });
  }

  const data = await Alumni.create({
    name,
    email,
    graduationYear,
    studyStartYear,
    studyEndYear,
    course,
    currentStatus,
  });

  res.status(201).json({ success: true, data });
});

module.exports = {
  getAllAlumni,
  getAlumniById,
  createAlumni,
  createAlumniRegistration,
  updateAlumni,
  deleteAlumni,
};
