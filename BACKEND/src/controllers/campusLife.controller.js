const CampusLife = require("../models/campusLife.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllCampusLife = getAll(CampusLife);
const getCampusLifeById = getById(CampusLife);
const createCampusLife = createOne(CampusLife);
const updateCampusLife = updateById(CampusLife);
const deleteCampusLife = deleteById(CampusLife);

module.exports = {
  getAllCampusLife,
  getCampusLifeById,
  createCampusLife,
  updateCampusLife,
  deleteCampusLife,
};
