"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Check");
});
const PORT = process.env.PORT;
mongoose_1.default.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
    .catch((error) => console.log(`${error} Did Not Connect`));
