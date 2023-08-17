const express = require("express");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/category", categoryRoute);

module.exports = router;