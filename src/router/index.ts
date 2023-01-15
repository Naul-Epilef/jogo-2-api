import express from "express";
import routes from "./auth.routes";

const router = express();

router.use("/auth", routes);

export default router;