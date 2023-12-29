const fs = require("fs");
const path = require("path");
const http = require("http");

console.log(__dirname); // Return Root Directory

fs.writeFileSync("App.txt", "This Is Simple File...");

const dirPath = path.join(__dirname, "files");

console.log(dirPath);

// fs.writeFileSync(`${dirPath}/app.txt`, "This Is Simple File");

// fs.readFile(`${dirPath}/app.txt`, (err, data) => {
//     console.log(data); // Return In Buffer Value
// });

// fs.readFile(`${dirPath}/app.txt`, "utf-8", (err, data) => {

//     if (data) console.log(data);

//     else console.log(err);

// });

// fs.appendFile(`${dirPath}/app.txt`, " 2 ...", (err) => {

//     if (!err) console.log("File Is Updated");

// });

// fs.readFile(`${dirPath}/app.txt`, "utf-8", (err, data) => {

//     if (data) console.log(data);

//     else console.log(err);

// });

// fs.rename(`${dirPath}/app.txt`, `${dirPath}/index.txt`, (err) => {

//     if (!err) console.log("File Name Is Updated");

// });

// fs.writeFileSync(`${dirPath}/app2.txt`, "This Is Simple File 2");

// fs.unlinkSync(`${dirPath}/app2.txt`); // Delete File

const PORT = 8080;

// http.createServer((req, res) => {

//     res.write(`Hello Local Server: ${PORT}`);

//     res.end();

// }).listen(PORT);

http.createServer((req, res) => {

    res.writeHead(201, {
        "Content-Type": "application/json"
    });

    res.write(JSON.stringify([{
        name: "Ahmed",
        skills: "Full Stack Developer"
    }]));

    res.end();

}).listen(PORT);