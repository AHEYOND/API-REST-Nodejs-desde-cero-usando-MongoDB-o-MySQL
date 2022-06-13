const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
     try{
          validationResult(req).throw() //Valida las cosas que se estan enviando por la petición
          return next() //Continua hacia el controlador
     }catch(err){
          res.status(403)
          res.send({errors: err.array()})
     }
}

module.exports = validateResults