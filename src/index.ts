import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Check");
});

app.listen(PORT, () => {
    console.log(`Listening On ${PORT}`);
});