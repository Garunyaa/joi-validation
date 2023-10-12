import Joi from "joi";

export const userSchema = Joi.object({
  user_name: Joi.string().alphanum().min(4).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).required(),
});
