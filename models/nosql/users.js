const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: Number,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
     timestamps:true, //createdAt, updatedAt (fecha de creación y fecha de actualización)
     versionKey:false,
  }
);

module.exports = mongoose.model("users",UserScheme)
