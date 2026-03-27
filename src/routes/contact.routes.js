const express = require("express");
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(createContact).get(protect, getAllContacts);
router.route("/:id").get(protect, getContactById).put(protect, updateContact).delete(protect, deleteContact);

module.exports = router;
