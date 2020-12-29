const express = require("express");
const app = express();
const morgan = require("morgan");

// Variables
const myPort = 3000;

// settings
app.set("port", process.env.PORT || myPort);
app.set("json spaces", 2);

// middlewares
app.use(morgan("dev")); // permite obtener respuestas cortas por la ocnsola
// app.use(morgan("combined"));  //metodo de respuesta mas largo y completo
app.use(express.urlencoded({ extended: false })); // soporte para datos no pesados (texto, sin fotos)
app.use(express.json()); // soporte para el formato json

// routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));
// starting the server
app.listen(myPort, () => {
  console.log("server on port " + myPort);
});
