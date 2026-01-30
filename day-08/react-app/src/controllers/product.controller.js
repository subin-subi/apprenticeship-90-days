import { HTTP_STATUS } from "../constants/httpStatus.js";
import { MESSAGES } from "../constants/messages.js";

res.status(HTTP_STATUS.OK).json({
  message: MESSAGES.LOGIN_SUCCESS,
});
