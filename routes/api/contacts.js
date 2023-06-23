const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", ctrl.updateById);

module.exports = router;
