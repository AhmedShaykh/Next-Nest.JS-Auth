import * as UserController from "../controllers/users";
import express from "express";

const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

export default router;