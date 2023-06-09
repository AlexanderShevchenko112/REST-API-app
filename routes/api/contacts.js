const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const validateBody = require("../../middlewares/validateBody");
const schemas = require("../../schemas/contacts");
router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;
