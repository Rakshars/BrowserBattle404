const Contact = require("../models/contact.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllContacts = getAll(Contact);
const getContactById = getById(Contact);
const createContact = createOne(Contact);
const updateContact = updateById(Contact);
const deleteContact = deleteById(Contact);

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
