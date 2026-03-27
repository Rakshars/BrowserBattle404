const Gallery = require("../models/gallery.model");
const { getAll, getById, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllGallery = getAll(Gallery, (req) => {
  const filter = {};

  if (req.query.category) {
    filter.category = String(req.query.category).toLowerCase();
  }

  return filter;
});

const getGalleryById = getById(Gallery);
const createGallery = createOne(Gallery);
const updateGallery = updateById(Gallery);
const deleteGallery = deleteById(Gallery);

module.exports = {
  getAllGallery,
  getGalleryById,
  createGallery,
  updateGallery,
  deleteGallery,
};
