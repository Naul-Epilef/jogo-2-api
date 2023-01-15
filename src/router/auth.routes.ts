import express from "express";

import { IReqRegister } from "../interfaces/auth";
import Register from "../services/auth/register";

const routes = express();

routes.get("/login", (req, res) => {
    res.status(200).json({ message: "User Logged!" });
});

routes.get("/forgot-password", (req, res) => {
    res.status(200).json({ message: "Enter Password!" });
});

routes.get("/register", (req, res) => {
    const { email, username, password }: IReqRegister = req.body;

    const newRegister = Register({ email, username, password });

    res.status(newRegister.status).json(newRegister.message);
});


export default routes;