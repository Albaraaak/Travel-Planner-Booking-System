const express = require("express");
const router = express.Router();
const adminOnly = require("../middleware/adminOnly");

const { insertProductController, getProductsController, getProductByIdController,updateProductController,deleteProductController } = require("../controllers/productController");
const authenticateToken = require ("../middleware/authentication");


router.post("/", authenticateToken, adminOnly,  insertProductController);
router.get("/", getProductsController);
router.get("/:id", getProductByIdController);
router.put("/:id", authenticateToken, adminOnly,  updateProductController);
router.delete("/:id", authenticateToken, adminOnly, deleteProductController);
module.exports = router;
