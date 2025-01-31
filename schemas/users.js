const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginschema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginschema,
  emailSchema,
};
