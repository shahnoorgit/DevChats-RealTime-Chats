import express from "express";
import * as dotenv from "dotenv";
import authroutes from "./routes/auth.route.js";
import connectdb from "./Database/mongoDBconnect.js";
import messagesroutes from "./routes/messages.route.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
server.listen(PORT, (req, res) => {
  connectdb();
  console.log(`app running on port ${PORT}`);
});
app.use("/api/auth", authroutes);
app.use("/api/messages", messagesroutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("welcom to home of API");
});
