const notFound = (res) => {
  res.writeHead(404, { "content-type": "application/json" });
  res.write(JSON.stringify({ message: "Route Not Found" }));
  res.end();
};
const ErrorHandler = {
  notFound,
};

module.exports = ErrorHandler;
