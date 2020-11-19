const express = require("express");
const router = express.Router();

// invoked for any requests passed to this router
router.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get("/events", function (req, res, next) {
  // ..
});

module.exports = router;
