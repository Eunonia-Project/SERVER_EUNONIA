const AdminModel = require('../model/AdminModel');
const { verifyToken } = require('../helpers/jwt');

const authenticationAdministror = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);
    const findUser = await AdminModel.findOneByEmail(payload.email);
    
    if (!findUser) { throw { name: "Not_Found_Admin" }; }
    if (findUser.role !== 'administrator') { throw { name: "Authetication_Failed" }; }
    req.requestAccess = payload;

    next()
  } catch (error) {
    next(error);
  }
}

module.exports = authenticationAdministror;