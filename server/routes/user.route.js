import express from "express";
import authRoute from "../middleware/auth.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authRoute, getUsersForSidebar);

export default router;
