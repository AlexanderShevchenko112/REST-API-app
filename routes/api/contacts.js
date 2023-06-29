const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const auth = require("../../middlewares/auth");
const isValidId = require("../../middlewares/isValidId");
const schemas = require("../../schemas/contacts");

router.get("/", auth, ctrl.listContacts);

router.get("/:id", auth, isValidId, ctrl.getContactById);

router.post("/", auth, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", auth, isValidId, ctrl.removeContact);

router.put("/:id", auth, isValidId, ctrl.updateContact);

router.patch("/:id/favorite", auth, isValidId, ctrl.updateStatusContact);

module.exports = router;
