import { assertIsDefined } from "../utils/assertIsDefined";
import NoteModel from "../models/note";
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getNotes: RequestHandler = async (req, res, next) => {

    const authenticatedUserId = req.session.userId;

    try {

        assertIsDefined(authenticatedUserId);

        const notes = await NoteModel.find({ userId: authenticatedUserId }).exec();

        res.status(200).json(notes);

    } catch (error) {

        next(error);

    }
};

export const getNote: RequestHandler = async (req, res, next) => {

    const noteId = req.params.noteId;

    const authenticatedUserId = req.session.userId;

    try {

        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid Note ID");
        }

        const note = await NoteModel.findById(noteId).exec();

        if (!note) {
            throw createHttpError(400, "Note Not Found");
        }

        if (!note.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You Cannot Access This Note");
        }

        res.status(200).json(note);

    } catch (error) {

        next(error);

    }
};

interface CreateNoteBody {
    title: string;
    text: string;
};

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (req, res, next) => {

    const title = req.body.title;

    const text = req.body.text;

    const authenticatedUserId = req.session.userId;

    try {

        assertIsDefined(authenticatedUserId);

        if (!title) {
            throw createHttpError(400, "Note Must Have A Title");
        }

        if (!text) {
            throw createHttpError(400, "Note Must Have A Text");
        }

        const newNote = await NoteModel.create({
            userId: authenticatedUserId,
            title: title,
            text: text
        });

        res.status(201).json(newNote);

    } catch (error) {

        next(error);

    }
};

interface UpdateNoteParams {
    noteId: string;
};

interface UpdateNoteBody {
    title?: string;
    text?: string;
};

export const updateNote: RequestHandler<UpdateNoteParams, unknown, UpdateNoteBody, unknown> = async (req, res, next) => {

    const noteId = req.params.noteId;

    const newTitle = req.body.title;

    const newText = req.body.text;

    const authenticatedUserId = req.session.userId;

    try {

        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid Note ID");
        }

        if (!newTitle && !newText) {
            throw createHttpError(400, "Note Must Have Updated At Least One Value");
        }

        const note = await NoteModel.findById(noteId).exec();

        if (!note) {
            throw createHttpError(400, "Note Not Found");
        }

        if (!note.userId.equals(authenticatedUserId)) {
            throw createHttpError(401, "You Cannot Access This Note");
        }

        if (newTitle) note.title = newTitle;

        if (newText) note.text = newText;

        const updatedNote = await note.save();

        res.status(200).json(updatedNote);

    } catch (error) {

        next(error);

    }
};

export const deleteNote: RequestHandler = async (req, res, next) => {

    const noteId = req.params.noteId;

    const authenticatedUserId = req.session.userId;

    try {

        assertIsDefined(authenticatedUserId);

        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid Note ID");
        }

        const note = await NoteModel.findByIdAndDelete(noteId).exec();

        if (!note) {
            throw createHttpError(400, "Note Not Found");
        }

        res.status(204).json({ message: "Note Deleted" });

    } catch (error) {

        next(error);

    }
};