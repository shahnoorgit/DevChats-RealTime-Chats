import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenandsetCookie from "../utils/JwtToken.js";

export const loginuser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPassword = await bcrypt.compare(password, user?.password || "");
    if (!user || !isPassword) {
      return res.status(400).json({ error: "invalid credentials" });
    }

    generateTokenandsetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const signupuser = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res.status(200).json("password dont match ");
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(200).json({ userInvalid: "username already exits" });
    }
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyPic : girlPic,
    });
    if (newUser) {
      generateTokenandsetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const logoutuser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "user logged out succesfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
