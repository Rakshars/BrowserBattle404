const asyncHandler = require("../middleware/asyncHandler");

const getAll = (Model, buildFilter) =>
  asyncHandler(async (req, res) => {
    const filter = typeof buildFilter === "function" ? buildFilter(req) : {};
    const data = await Model.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  });

const getById = (Model) =>
  asyncHandler(async (req, res) => {
    const data = await Model.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    res.status(200).json({ success: true, data });
  });

const createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const data = await Model.create(req.body);
    res.status(201).json({ success: true, data });
  });

const updateById = (Model) =>
  asyncHandler(async (req, res) => {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    res.status(200).json({ success: true, data });
  });

const deleteById = (Model) =>
  asyncHandler(async (req, res) => {
    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Resource not found",
      });
    }

    res.status(200).json({ success: true, data: null });
  });

module.exports = {
  getAll,
  getById,
  createOne,
  updateById,
  deleteById,
};
