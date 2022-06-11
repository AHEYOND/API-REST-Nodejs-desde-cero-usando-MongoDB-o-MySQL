const mongoose = require("mongoose");

const dbConect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("Conexión Correcta")
      } else {
        console.log("Error de conexión")
      }
    }
  );
};

module.exports = dbConect;
