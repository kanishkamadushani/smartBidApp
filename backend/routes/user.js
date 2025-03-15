import express from "express";

import {userLogin, userSignup } from "../controllers/user.js";

const router = express.Router();

//signup route
router.post("/signup", userSignup)

//login route
router.post("/login", userLogin)


export default router;