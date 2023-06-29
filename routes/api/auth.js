const express = require("express");
const router = express.Router();
const schemas = require("../../schemas/users");
const validateBody = require("../../middlewares/validateBody");
const ctrl = require("../../controllers/auth");
const auth = require("../../middlewares/auth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginschema), ctrl.login);
router.get("/current", auth, ctrl.getCurrent);
router.post("/logout", auth, ctrl.logout);

module.exports = router;
