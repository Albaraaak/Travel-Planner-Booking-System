const express = require("express");
const router = express.Router();

const { insertProductController, getProductsController, getProductByIdController,updateProductController,deleteProductController } = require("../controllers/productController");
const authenticateToken = require ("../middleware/authentication");


router.post("/",  insertProductController);
router.get("/", getProductsController);
router.get("/:id", getProductByIdController);
router.put("/:id",  updateProductController);
router.delete("/:id",  deleteProductController);
module.exports = router;