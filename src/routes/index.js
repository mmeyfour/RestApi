// aqui voy a crear las roytas que seran accesibles desde el programa
const { Router } = require("express"); // el metodo Router sirve para coenctar con el programa
const router = Router();
// esta es mi ruta
router.get("/user", (req, res) => {
  const data = {
    name: "mersad",
    surname: "meyfour",
  };
  res.json(data);
});
// desde aqui se exporta
module.exports = router;
