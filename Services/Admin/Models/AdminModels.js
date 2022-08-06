const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");

class AdminModel {
  static async findAll() {
    try {
      const admin = await getDatabase().collection("admin").find().toArray();
      return admin;
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async findOne(id) {
    try {
      const admin = await getDatabase()
        .collection("admin")
        .findOne({ _id: ObjectId(id) });
      return admin;
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async createAdmin(data) {
    try {
      await getDatabase().collection("admin").insertOne(data);
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async updateAdmin(id, data) {
    try {
      await getDatabase()
        .collection("admin")
        .updateOne({ _id: ObjectId(id) }, { $set: data });
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async deleteAdmin(id) {
    try {
      await getDatabase()
        .collection("admin")
        .deleteOne({ _id: ObjectId(id) });
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
}

module.exports = AdminModel;
