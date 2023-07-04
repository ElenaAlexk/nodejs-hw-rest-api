const express = require("express");

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

const ctrl = require("../../controllers/auth/register");
const { ctrlWrapper } = require("../../helpers");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

module.exports = router;
