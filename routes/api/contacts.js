const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas/contacts");
const isValidId = require("../../middlewares/isValidId");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, ctrl.updateContact);

router.patch("/:id/favorite", isValidId, ctrl.updateStatusContact);

module.exports = router;
