const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}: ${req.url} New Req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;

      case "/about":
        const username = myUrl.query;
        res.end(`Hi, ${username}`);
        break;

      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results" + search);
        break;

       default:
        res.end("404 Not Found");
    }
  });
});

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
