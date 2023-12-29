import NoteModel from "./models/note";
import mongoose from "mongoose";
import express, {
    NextFunction,
    Request,
    Response
} from "express";
import createHttpError, { isHttpError } from "http-errors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", async (req, res) => {

    const notes = await NoteModel.find().exec();

    res.status(200).json(notes);

});

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