import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const LogedUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: LogedUserId } });
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(error, "at usersidebar");
    res.status(500).json({ error: "error while fetching users" });
  }
};
