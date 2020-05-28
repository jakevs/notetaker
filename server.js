const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const htmlroutes = require("./routes/htmlroutes");
const apiroutes = require("./routes/apiroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes
app.use("/", htmlroutes);
app.use("/api", apiroutes);

//listener
app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT);
});
