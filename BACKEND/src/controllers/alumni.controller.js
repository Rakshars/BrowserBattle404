const Alumni = require("../models/alumni.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllAlumni = getAll(Alumni);
const getAlumniById = getById(Alumni);
const createAlumni = createOne(Alumni);
const updateAlumni = updateById(Alumni);
const deleteAlumni = deleteById(Alumni);

module.exports = {
  getAllAlumni,
  getAlumniById,
  createAlumni,
  updateAlumni,
  deleteAlumni,
};
