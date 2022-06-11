const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) =>{
     //tracks.js con lo cual nos devolvera [track, js]
     return fileName.split('.').shift()
}

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
     const name = removeExtension(file)
     if(name!== 'index'){
          //Se carga la ruta
          console.log(`Cargando ruta ${name}`)
          router.use(`/${name}`,require(`./${file}`)) //http:localhost:3001/api/users
     }
})
//console.log({a})

module.exports = router