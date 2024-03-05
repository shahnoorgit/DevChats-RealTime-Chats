import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import authRoute from "../middleware/auth.js";

const router = express.Router();
router.get("/:id", authRoute, getMessages);
router.post("/send/:id", authRoute, sendMessage);
export default router;
