const Product = require("../models/Product");

const insertProduct = async (data) => {
  try {
    // 🔥 CASE 1: ARRAY (bulk insert)
    if (Array.isArray(data)) {
      const cleanedData = data.map(item => ({
        ...item,
        title: item.title ? item.title.trim() : "",
      }));

      const result = await Product.insertMany(cleanedData);
      return result;
    }

    // 🔥 CASE 2: SINGLE PRODUCT
    const newProduct = await Product.create({
      ...data,
      title: data.title ? data.title.trim() : ""
    });

    return newProduct;

  } catch (err) {
    throw err;
  }
};

const getProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (err) {
        throw err;
    }
};

const getProductById = async (id) => {
    try {
        const product = await Product.findById(id);
        return product ? product: [];
    } catch (err) {
        throw err;
    }
};
const updateProduct = async (id, data) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return updatedProduct;

  } catch (err) {
    throw err;
  }
};
const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found");
    }

    return deletedProduct;

  } catch (err) {
    throw err;
  }
};
module.exports = { insertProduct, getProducts, getProductById, updateProduct,deleteProduct};