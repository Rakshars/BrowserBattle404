const Page = require("../models/page.model");
const asyncHandler = require("../middleware/asyncHandler");
const { getAll, createOne, updateById, deleteById } = require("../utils/crudFactory");

const getAllPages = getAll(Page);

const getPageBySlug = asyncHandler(async (req, res) => {
  const data = await Page.findOne({ slug: req.params.slug });

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Page not found",
    });
  }

  return res.status(200).json({ success: true, data });
});

const createPage = createOne(Page);
const updatePage = updateById(Page);
const deletePage = deleteById(Page);

module.exports = {
  getAllPages,
  getPageBySlug,
  createPage,
  updatePage,
  deletePage,
};
