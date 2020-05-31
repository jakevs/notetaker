// const router = require("express").Router();
// const store = require("../db/store");

// router.get("/notes", (req, res) => {
//   store
//     .getNotes()
//     .then((notes) => res.json(notes))
//     .catch((err) => res.status(500).json(err));
// });

// module.exports = router;
const notesData = require("../db/db.json");
const router = require("express").Router();
const fs = require("fs");

// Direct to retrieve api notes
router
  .get("/notes", (req, res) => {
    res.json(notesData);
  })
  // Direct to post api notes
  .post("/notes", (req, res) => {
    notesData.forEach((note) => {
      note.id++;
    });

    const newNote = req.body;
    newNote.id = 1;

    // Move the new note into the notes array then save it to db.json
    notesData.unshift(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
      if (err) throw err;

      console.log("File saved");
    });

    res.end();
  });

// Direct to delete a specific note
router.delete("/notes/:id", (req, res) => {
  const chosenId = req.params.id - 1;

  notesData.splice(chosenId, 1);

  for (let i = chosenId; i < notesData.length; i++) {
    notesData[i].id--;
  }

  fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
    if (err) throw err;

    console.log("File deleted");
  });

  res.end();
});

module.exports = router;
