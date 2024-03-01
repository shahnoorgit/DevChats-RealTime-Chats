import User from "../models/user.model.js";

export const loginuser = (req, res) => {
  res.send("login route");
};

export const signupuser = (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      res.send("password dont match ");
    }
    const user = User.findOne({ username });
    if (user) {
      res.send("user already exists");
    }

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  } catch (error) {}
};

export const logoutuser = (req, res) => {
  res.send("logout route");
};
