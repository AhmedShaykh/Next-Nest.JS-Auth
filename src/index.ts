import notesRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import mongoose from "mongoose";
import express, {
    NextFunction,
    Request,
    Response
} from "express";
import createHttpError, { isHttpError } from "http-errors";
import MongoStore from "connect-mongo";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE
    }),
}));

app.use("/api/users", userRoutes);

app.use("/api/notes", notesRoutes);

app.use((req, res, next) => {

    next(createHttpError(404, "Endpoint Not Found"));

});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {

    console.error(error);

    let errorMessage = "An Unknown Error Occurred";

    let statusCode = 500;

    if (isHttpError(error)) {

        statusCode = error.status;

        errorMessage = error.message;
    }

    res.status(statusCode).json({ error: errorMessage });
});

mongoose.connect(process.env.DATABASE!).then(() => {

    app.listen(PORT, () => console.log(`Server Running On PORT: ${PORT}`));

})
    .catch(console.error);

export default app;