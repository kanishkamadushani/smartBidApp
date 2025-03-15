import express from "express";

import { signup } from "../controllers/user.js";

const router = express.Router();

router.post("/api/user", signup)


export default router;