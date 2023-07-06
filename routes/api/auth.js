const express = require("express");
const router = express.Router();
const schemas = require("../../schemas/users");
const validateBody = require("../../middlewares/validateBody");
const ctrl = require("../../controllers/auth");
const auth = require("../../middlewares/auth");
const upload = require("../../middlewares/upload");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);
router.post("/login", validateBody(schemas.loginschema), ctrl.login);
router.get("/current", auth, ctrl.getCurrent);
router.post("/logout", auth, ctrl.logout);
router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
