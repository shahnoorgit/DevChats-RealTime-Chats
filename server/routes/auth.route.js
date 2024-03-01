import express from "express";
import {
  loginuser,
  logoutuser,
  signupuser,
} from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/login", loginuser);

route.post("/signup", signupuser);

route.post("/logout", logoutuser);

export default route;
