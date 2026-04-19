const Product = require("../models/Product");

const insertProduct = async (title, description, destination, price, date, nbOfPeople, type, rating, reviews) => {
    try {
        const productToCreate = {
            title,
            description,
            destination,
            price,
            date,
            nbOfPeople,
            type,
            rating, 
            reviews,
            availableSeats: nbOfPeople, // seats start equal to total capacity
        };

        const newProduct = await Product.create(productToCreate);
        return {
            id: newProduct._id,
        };
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