const Placement = require("../models/placement.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllPlacements = getAll(Placement);
const getPlacementById = getById(Placement);
const createPlacement = createOne(Placement);
const updatePlacement = updateById(Placement);
const deletePlacement = deleteById(Placement);

module.exports = {
  getAllPlacements,
  getPlacementById,
  createPlacement,
  updatePlacement,
  deletePlacement,
};
