// server.js
import data from './src/data/data'
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Have all URLS prefixed with a /api
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});