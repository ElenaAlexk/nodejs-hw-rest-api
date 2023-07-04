const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");

const { isValidId } = require("../../middlewares");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.addContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

router.put("/:id", isValidId, ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", isValidId, ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
