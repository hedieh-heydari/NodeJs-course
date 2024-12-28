const http = require("http");
const products = require("./data/products.json");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/api/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
  }
});

server.listen(PORT);
console.log(`server run on port ${PORT} http://localhost:${PORT}`);
