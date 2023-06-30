const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

const isValidId = require("../../middlewares");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, ctrl.updateById);

router.patch("/:id/favorite", isValidId, ctrl.updateStatusContact);

module.exports = router;
