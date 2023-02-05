import { createServer, IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/") {
    res.end(readFileSync("./index.html", "utf8"));
  } else if (req.url === "/about-us") {
    res.end(readFileSync("./about.html", "utf8"));
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
