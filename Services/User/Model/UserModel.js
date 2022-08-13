const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");

class UserModel {
  static async findAll() {
    try {
      const user = await getDatabase().collection("user").find().toArray();
      return user;
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async findOne(id) {
    try {
      const user = await getDatabase()
        .collection("user")
        .findOne({ _id: ObjectId(id) });
      return user;
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async createUser(data) {
    try {
      await getDatabase().collection("user").insertOne(data);
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async updateUser(id, data) {
    try {
      await getDatabase()
        .collection("user")
        .updateOne({ _id: ObjectId(id) }, { $set: data });
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
  static async deleteUser(id) {
    try {
      await getDatabase()
        .collection("user")
        .deleteOne({ _id: ObjectId(id) });
    } catch (error) {
      // console.log(error);
      throw new error();
    }
  }
}

module.exports = UserModel;