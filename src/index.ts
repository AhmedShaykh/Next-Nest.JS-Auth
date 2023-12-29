import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Check");
});

const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE!).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running On PORT: ${PORT}`);
    });
})
    .catch(console.error);