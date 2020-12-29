const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  // async, await -> asinchron data loading
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json(); // convert to json
  res.send(users);
});

module.exports = router;
