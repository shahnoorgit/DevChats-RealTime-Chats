import express from "express";
import * as dotenv from "dotenv";
import authroutes from "./routes/auth.route.js";
import connectdb from "./Database/mongoDBconnect.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.listen(PORT, (req, res) => {
  connectdb();
  console.log(`app running on port ${PORT}`);
});
app.use("/api/auth", authroutes);

app.get("/", (req, res) => {
  res.send("welcom to home of API");
});
