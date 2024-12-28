const ProductModel = require("../model/product.model");

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {}
}

async function getById(req, res) {
  try {
    const id = req.url.split("/")[3];
    console.log(id);
    const products = await ProductModel.findById(id);
    if (!products) {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(JSON.stringify({ message: "no product found" }));
      res.end();
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(products));
      res.end();
    }
  } catch (error) {}
}

const productsController = {
  get,
  getById,
};

module.exports = productsController;
