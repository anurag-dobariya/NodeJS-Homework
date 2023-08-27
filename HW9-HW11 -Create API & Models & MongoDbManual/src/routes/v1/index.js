const express = require("express");

const bookRoute = require("./book.route.js");
const hotelRoute = require("./hotel.route.js");
const busRoute = require("./bus.route.js");
const stationaryRoute = require("./stationary.route.js");
const schoolRoute = require("./school.route.js");
const travelRoute = require("./travel.route.js");
const pharmacyRoute = require("./pharmacy.route.js");
const jewelleryRoute = require("./jewellery.route.js");
const movieRoute = require("./movie.route.js");
const musicRoute = require("./music.route.js");
const groceryRoute = require("./grocery.route.js");

const router = express.Router();

router.use("/book", bookRoute);
router.use("/hotel", hotelRoute);
router.use("/bus", busRoute);
router.use("/stationary", stationaryRoute);
router.use("/school", schoolRoute);
router.use("/travel", travelRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/grocery", groceryRoute);

module.exports = router;