const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";
  let status = "ERROR";
  let error = true;

  switch (err.name) {
    case "Bad_Request_Email":
      code = 400;
      message = "Email is required";
      break;
    case "Bad_Request_Password":
      code = 400;
      message = "Password is required";
      break;
    case "Bad_Request_Email_Format":
      code = 400;
      message = "Wrong Email Format";
      break;
    case "Bad_Request_Password_Length":
      code = 400;
      message = "Password Min 8 Character";
      break;
      case "Authetication_Failed":
        code = 401;
        message = "Not Authorized";
      break;
    case "Forbidden":
      code = 403;
      message = "Forbidden to access";
      break;
    case "Forbidden_Email":
      code = 403;
      message = "Email is already registered";
      break;
    case "Not_Found_Admin":
      code = 404;
      message = "Admin not found";
      break;
    case "Not_Found_Password":
      code = 404;
      message = "Password not match";
      break;
    default:
      break;
  }

  res.status(code).json({ status, error, message });
};

module.exports = errorHandler;