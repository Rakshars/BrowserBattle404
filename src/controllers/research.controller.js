const Research = require("../models/research.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllResearch = getAll(Research, (req) => {
  const filter = {};

  if (req.query.type) {
    filter.type = String(req.query.type).toLowerCase();
  }

  return filter;
});

const getResearchById = getById(Research);
const createResearch = createOne(Research);
const updateResearch = updateById(Research);
const deleteResearch = deleteById(Research);

module.exports = {
  getAllResearch,
  getResearchById,
  createResearch,
  updateResearch,
  deleteResearch,
};
