const http = require("http");
const fs = require("fs");
const url = require("url");

function handler() {
  (req, res) => {
    if (req.url === "/favicon.ico") {
      return res.end();
    }
    const log = `${Date.now()}: ${req.url} New Req received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err) => {
      if (err) {
        console.log("Handle error here:", err);
      }
      switch (myUrl.pathname) {
        case "/":
          res.end("HomePage");
          break;

        case "/about":
          const username = myUrl.query.myname;
          res.end(`Hi, Mr. ${username}`);
          break;

        case "/search":
          const search = myUrl.query.search_query;
          res.end("Here is your log" + search);
          break;

        case "/signup":
          if (req.method === "GET") res.end("This is signup page");
          else if (req.method === "POST") {
            res.end("Success");
          }

        default:
          res.end("404 NOT FOUND");
      }
    });
  };
}


const server = http.createServer(handler);

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
