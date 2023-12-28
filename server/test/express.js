const express = require("express");
const colors = require("colors");

const app = express();

const PORT = 8080;

app.use(express.json()); // Middleware

app.get("/", (req, res) => {
    res.send("Welcome Express!");
});

app.get("/about", (req, res) => {
    res.send("Welcome About!");
});

app.post("/user", (req, res) => {
    console.log(colors.cyan(req.body));
    res.send("Welcome User!");
});

app.listen(PORT, () => {
    console.log(`Listening On ${PORT}`);
});