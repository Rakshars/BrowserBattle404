const Admission = require("../models/admission.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllAdmissions = getAll(Admission);
const getAdmissionById = getById(Admission);
const createAdmission = createOne(Admission);
const updateAdmission = updateById(Admission);
const deleteAdmission = deleteById(Admission);

module.exports = {
  getAllAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
};
