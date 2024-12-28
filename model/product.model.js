const products = require("../data/products.json");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

async function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(products.find((products) => products.id == id));
  });
}

const ProductModel = {
  find,
  findById,
};
module.exports = ProductModel;
