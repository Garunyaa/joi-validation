import { errorResponse, successResponse } from "../middleware/response";
import { userSchema } from "../models/user-model";

const users = [];

export const createUser = async (req, res) => {
  try {
    const validation = await userSchema.validate(req.body);

    if (validation.error) {
      return errorResponse(res, 400, validation.error.details[0].message);
    }
    const { user_name, email, age } = req.body;
    const newUser = { user_name, email, age };
    await users.push(newUser);

    return successResponse(res, 201, { newUser });
  } catch (error) {
    console.error(error);
    return errorResponse(res, 500, "Internal Server Error");
  }
};

export const getUsers = (req, res) => {
  try {
    return successResponse(res, 201, { users });
  } catch (error) {
    console.error(error);
    return errorResponse(res, 500, "Internal Server Error");
  }
};
