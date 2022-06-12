const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    }
  },
  {
     timestamps:true, //createdAt, updatedAt (fecha de creación y fecha de actualización)
     versionKey:false,
  }
);

module.exports = mongoose.model("storage",StorageScheme)
