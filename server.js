const http = require("http");
const port = process.env.PORT || 80;
const app = require("./app");

const server = http.createServer(app).listen(port);

