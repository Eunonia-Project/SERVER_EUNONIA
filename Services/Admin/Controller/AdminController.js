const AdminModel = require("../Model/AdminModel");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const emailChecker = require("../Helpers/emailChecker");

class AdminController {
  static async loginAdmin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) { throw { name: "Bad_Request_Email" } }
      if (!password) { throw { name: "Bad_Request_Password" } }

      const isAdmin = await AdminModel.findOneByEmail(email);
      if (!isAdmin) { throw { name: "Not_Found_Admin" } }

      const isPassword = comparePassword(password, isAdmin.password);
      if (!isPassword) { throw { name: "Not_Found_Password" } }

      const access_token = createToken({
        id: isAdmin._id,
        username: isAdmin.username,
        email: isAdmin.email,
        role: isAdmin.role
      });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async createAdmin(req, res, next) {
    try {
      const { username, email, role } = req.body;
      const isAdmin = await AdminModel.findOneByEmail(email);
      if (isAdmin) { throw { name: "Forbidden_Email" } }

      const isEmailCheck = emailChecker(email);
      const isPasswordCheck = req.body.password;
      if (!isEmailCheck) { throw { name: "Bad_Request_Email_Format" } };
      if (isPasswordCheck?.length < 8 ) { throw { name: "Bad_Request_Password_Length" } };

      let password = hashPassword(req.body.password);
      await AdminModel.createAdmin({ username, email, password, role });

      res.status(201).json({ message: `admin ${username} was created` });
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const admin = await AdminModel.findAll();
      console.log("admin:::", admin);

      const payload = admin.map(el => {
        return{
          username: el.username,
         email: el.email,
         role: el.role
        }
      })
      res.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    try {
      const admin = await AdminModel.findOne(req.params.id);
      res.status(200).json(admin);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAdmin(req, res, next) {
    try {
      await AdminModel.deleteAdmin(req.params.id);
      res.status(200).json({ message: `admin was deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdminController;
