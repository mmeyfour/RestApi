const { Router } = require("express");
const router = Router();
const _ = require("underscore");
// acceso a un archivo Json:
const movies = require("../sample.json");
console.log(movies);

// routes:

// routa de acceso  GET:
router.get("/", (req, res) => {
  // res.send("movies"); // to send text
  res.json(movies);
});

// routa de acceso  POST:
router.post("/", (req, res) => {
  // res.send("movies"); // to send text
  //console.log(req.body);  // to get the recived message
  // creating a new object movie to be saved:
  const { title, director, year, rating } = req.body;

  if (title && director && year && rating) {
    //res.json("saved");
    const id = movies.length + 1;
    const newMovie = { id, ...req.body };
    console.log(newMovie);
    movies.push(newMovie);
    res.json(movies);
  } else {
    //res.json({ error: "Error!" });
    // error message :
    res.status(500).json({ error: "There was an error !" });
  }
  //res.send("Resived!"); // respond to the recived message
});

// routa de acceso PUT:
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({ error: "Something go wrongs!" });
  }
});

// routa de acceso DELETE:
router.delete("/:id", (req, res) => {
  // get the id from the message
  const { id } = req.params;
  //console.log(req.params);
  if (id > movies.length) {
    res.send({ error: "Out of range !!!" });
  } else {
    _.each(movies, (movie, i) => {
      // serach for all movies at the database
      if (movie.id == id) {
        // finde the movie with selected id
        movies.splice(i, 1); // remove the selected movie
      }
    });
    res.send(movies);
  }
});

module.exports = router;
