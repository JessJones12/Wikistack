const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
// const stylesheets = require("./style");

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  // let message = console.log("hello");
  res.send(layout(""));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
