import * as UserController from "../controllers/users";
import express from "express";

const router = express.Router();

router.post("/register", UserController.register);

router.post("/login", UserController.login);

// router.get("/user", UserController.getUser);

// router.post("/logout", UserController.logout);

export default router;