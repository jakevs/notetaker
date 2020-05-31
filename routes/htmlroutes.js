// const path = require("path");
// const router = require("express").Router();

// router.get("/notes", function (req, res) {
//   res.sendfile(path.join(__dirname, "../public/notes.html"));
// });

// router.get("*", function (req, res) {
//   res.sendfile(path.join(__dirname, "../public/index.html"));
// });

// module.exports = router;
const router = require("express").Router();
const path = require("path");

// Direct to notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Direct all other requests to index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
