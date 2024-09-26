//core module

//200 to 500-600

//http - hypertext transfer protocol
//https = hypertext transfer protocol secure
// https://m.youtube.com/

//core module(part of node.js)
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  //   res.setHeader({ "Content-Type": "text/html" });
  res.write("<h1>hello! Node.js</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`server running on ${port}`);
});
