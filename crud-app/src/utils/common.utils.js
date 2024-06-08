export const erroHandler = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    message,
    status: statusCode,
    sucess: false,
  });
};

export const sucessHandler = (res, message, data = [], statusCode = 200) => {
  return res.status(statusCode).json({
    message,
    status: statusCode,
    data,
    sucess: true,
  });
};
