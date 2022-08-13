const AdminModel = require("../Model/AdminModel");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class AdminController {
  static async loginAdmin (req, res, next) {
    try {
      const {email, password} = req.body;
      if (!email) {throw {name: "BadRequestEmail"}}
      if (!password) {throw {name: "BadRequestPassword"}}
      
      const isAdmin = await AdminModel.findOneByEmail(email);
      if (!isAdmin) { throw ("admin not found");} 

      const isPassword = comparePassword(password, isAdmin.password);
      if (!isPassword) { throw ("password not match");}


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

  static async findAll(req, res, next) {
    try {
      const admin = await AdminModel.findAll();
      res.status(200).json(admin);
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
  static async createAdmin(req, res, next) {
    try {
      const { username, email} = req.body;
      let password = hashPassword(req.body.password);
      await AdminModel.createAdmin({ username, email, password });
      res.status(201).json({ message: `admin ${username} was created` });
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
