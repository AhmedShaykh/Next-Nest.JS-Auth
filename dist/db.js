"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const PORT = validateEnv_1.default.PORT;
// mongoose.connect(env.MONGO_CONNECTION).then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server Running On PORT: ${PORT}`);
//     });
// })
//     .catch(console.error);
