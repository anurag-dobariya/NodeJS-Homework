const express = require("express");

const galleryRoute = require("./gallery.route");

const router = express.Router();

router.use("/gallery" , galleryRoute);

module.exports = router ;