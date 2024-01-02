import UserModel from "../models/user";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register: RequestHandler = async (req, res, next) => {

    const { username, email, password } = req.body;

    try {

        const existingUser = await UserModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({ username, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({ message: "User Created Successfully" });

    } catch (error) {

        next(error);

    }

};

export const login: RequestHandler = async (req, res, next) => {

    const { email, password } = req.body;

    try {

        const user = await UserModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Password" });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SESSION_SECRET!, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000,
            secure: process.env.NODE_ENV === "production"
        });

        res.status(200).json({ user: user, token: token });

    } catch (error) {

        next(error);

    }

};