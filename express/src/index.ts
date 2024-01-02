import notesRoutes from "./routes/notes";
import usersRoutes from "./routes/users";
import mongoose from "mongoose";
import express, {
    NextFunction,
    Request,
    Response
} from "express";
import createHttpError, { isHttpError } from "http-errors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/api/notes", notesRoutes);

app.use("/api/users", usersRoutes);

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