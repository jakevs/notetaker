// const util = require("util");
// const fs = require("fs");

// // This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
// const uuidv1 = require("uuid/v1");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Store {
//   read() {}

//   write(note) {}

//   getNotes() {
//     return this.read().then((notes) => {
//       let parsedNotes;

//       try {
//         parsedNotes = [].concat(JSON.parse(notes));
//       } catch (err) {
//         parsedNotes = [];
//       }
//       return parsedNotes;
//     });
//   }

//   addNote(note) {}
// }

// module.exports = new Store();
