const http = require("http");
const productsController = require("./controllers/product.controller");
const ErrorHandler = require("./controllers/errorHandler.controlle");
const PORT = 3001;
const server = http.createServer((req, res) => {
  if (req.url == "/api/products") {
    productsController.get(req, res);
  } else if (req.url.match(/\/api\/products\/[0-9]+/)) {
    productsController.getById(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
});

server.listen(PORT);
console.log(`server run on port ${PORT} http://localhost:${PORT}`);
