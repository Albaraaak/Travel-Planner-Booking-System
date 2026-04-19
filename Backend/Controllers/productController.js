const { validationResult } = require("express-validator");
const { insertProduct, getProducts, getProductById,updateProduct,deleteProduct } = require("../services/productService");

const insertProductController = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: errors.array(),
                message: "Validation error",
            });
        }

        const { title, description, destination, price, date, nbOfPeople, type,rating, reviews } = req.body;
        const response = await insertProduct(title, description, destination, price, date, nbOfPeople, type, rating, reviews);

        res.status(201).json({
            success: true,
            data: response,
            message: "Product added successfully",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};

const getProductsController = async (req, res) => {
    try {
        const response = await getProducts();

        res.status(200).json({
            success: true,
            data: response,
            message: "Products returned successfully",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};

const getProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getProductById(id);

        if (!response) {
            return res.status(404).json({
                success: false,
                error: "No product found with this ID",
                message: "Not found",
            });
        }

        res.status(200).json({
            success: true,
            data: response,
            message: "Product returned successfully",
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};
const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await updateProduct(id, req.body);

    res.status(200).json({
      success: true,
      data: response,
      message: "Product updated successfully ✅",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteProduct(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully ❌",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

module.exports = { insertProductController, getProductsController, getProductByIdController,updateProductController, deleteProductController};