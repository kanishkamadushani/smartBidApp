import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

// token creating function
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//signup function
export const userSignup = async (req, res) => {
  try {
    const {
      email,
      password,
      re_password,
      admin,
      first_name,
      last_name,
      contact_number,
      address,
    } = req.body;

    const user = await User.signup(
      email,
      password,
      re_password,
      admin,
      first_name,
      last_name,
      contact_number,
      address
    );

    //create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login function
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    //admin status
    const admin = user.admin;

    res.status(200).json({ email, token, admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
