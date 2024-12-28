const http = require("http");
const productsController = require("./controllers/product.controller");
const PORT = 3001;
const server = http.createServer((req, res) => {
  if (req.url == "/api/products") {
    productsController.get(req, res);
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
  }
});

server.listen(PORT);
console.log(`server run on port ${PORT} http://localhost:${PORT}`);
