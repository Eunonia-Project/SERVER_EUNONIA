const AdminModel = require("../model/AdminModel");
const {verifyToken} = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const {access_token} = req.headers;
    const payload = verifyToken(access_token);
    const findUser = await AdminModel.findOneByEmail(payload.email);
    console.log("masuk auth", payload)
    if (!findUser) { throw {name: "Invalid"}; }

    req.requestAccess = payload;
    next()
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;