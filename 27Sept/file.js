const fs = require("fs");
// const path = require("path");
//file system handling

// Sync...
// fs.writeFileSync("test.txt", "Hello Node.js");

//async
// fs.writeFile("./test.txt", "hello JS", (err) => {});

//Read File - sync
// const result = fs.readFileSync("contact.txt", "utf-8");
// console.log(result);

//readFile  cannot be passed to any variable
// fs.readFile("contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error: ", err);
//   } else {
//     console.log(result);
//   }
// });

// const notes = "/users/joe/notes.js";
// console.log(path.dirname(notes)); // /users/joe
// console.log(path.basename(notes)); // notes.txt
// console.log(path.extname(notes)); // .txt

// fs.writeFile("index.html", "hello! lja", (err) => {});

// fs.appendFileSync("index.html", `${Date.now()}Hello There\n`);

// fs.cpSync("./contact.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./index.html"));
