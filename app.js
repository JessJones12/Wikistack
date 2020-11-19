const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const wikiRouter = require("./models/routes/wiki");
const users = require("./models/routes/users");
// const stylesheets = require("./style");

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use("/wiki", wikiRouter);
const { db } = require("./models");

const init = async () => {
  await db.sync({ force: true });
  // await User.sync();
  // make sure that you have a PORT constant
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res, next) => {
  // let message = console.log("hello");
  res.send(layout(""));
});

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running at ${PORT}`);
// });
