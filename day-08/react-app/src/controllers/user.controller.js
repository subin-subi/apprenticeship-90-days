// controllers/user.controller.js
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { MESSAGES } from "../constants/messages.js";

res.status(HTTP_STATUS.OK).json({
  message: MESSAGES.LOGIN_SUCCESS,
});

import { getAllUsers } from "../services/user.service.js";

export const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};
