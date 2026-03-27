const Academic = require("../models/academic.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllAcademics = getAll(Academic);
const getAcademicById = getById(Academic);
const createAcademic = createOne(Academic);
const updateAcademic = updateById(Academic);
const deleteAcademic = deleteById(Academic);

module.exports = {
  getAllAcademics,
  getAcademicById,
  createAcademic,
  updateAcademic,
  deleteAcademic,
};
