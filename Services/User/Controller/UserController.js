const AdminModel = require("../Model/AdminModel");
const { hashPassword } = require("../../../helpers/bcrypt");

class UserController {
  static async findAll(req, res, next) {
    try {
      const user = await AdminModel.findAll();
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      const user = await AdminModel.findOne(req.params.id);
      res.status(200).json(user);
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

module.exports = UserController;