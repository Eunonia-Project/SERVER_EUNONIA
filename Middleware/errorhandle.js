const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";

  switch (err.name) {
    case "BadRequestEmail":
      code = 400;
      message = "Email is required";
      break;
    case "BadRequestEmail":
      code = 400;
      message = "Email is required";
      break;
    default:
      break;
  }
  
  res.status(code).json({ message });
};

module.exports = errorHandler;