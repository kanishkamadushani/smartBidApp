import express from "express";

import { allUsers, userLogin, userSignup } from "../controllers/user.js";

const router = express.Router();

//signup route
router.post("/signup", userSignup);

//login route
router.post("/login", userLogin);

//get all users
router.get("/all", allUsers);

export default router;
