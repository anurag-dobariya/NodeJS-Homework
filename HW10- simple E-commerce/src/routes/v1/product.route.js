const express = require("express");
const {productValidation} = require("../../validations");
const {productController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create product info */
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

/** get product list */
router.get(
    "/list",
    productController.getProductList
);

/** delete product */
router.delete(
    "/delete-product/:productId",
    productController.deleteProduct
);

module.exports = router;