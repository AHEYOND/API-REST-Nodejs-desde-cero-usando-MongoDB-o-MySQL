const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: Number,
    }
  },
  {
     timestamps:true, //createdAt, updatedAt (fecha de creación y fecha de actualización)
     versionKey:false,
  }
);

module.exports = mongoose.model("storage",StorageScheme)
