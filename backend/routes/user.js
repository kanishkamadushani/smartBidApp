import express from "express";
import mongoose from "mongoose";


import { User } from "../models/userModel.js";

const router = express.Router();

router.post("/api/user", async(req, res) => {

    const {email, password} = req.body

  
    try {
        await User.create({email: email, password: password})
        console.log(email, password)
        res.status(200).json({message: "Done"})
    } catch (error) {
        res.status(400).json({message: "Bad", error: error})
    }
})


export default router;