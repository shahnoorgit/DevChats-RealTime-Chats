import conversation from "../models/conversations.model.js";
import Message from "../models/messages.model.js";
import { getReciverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;
    let Conversation = await conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!Conversation) {
      Conversation = await conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      Conversation.messages.push(newMessage._id);
    }
    await Promise.all([Conversation.save(), newMessage.save()]);
    //Realtime messages Functionality Here
    const recieverSocketId = getReciverSocketId(recieverId);
    if (recieverSocketId) {
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }
    res.send(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error while sending msg" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let Conversation = await conversation
      .findOne({
        participants: { $all: [senderId, userToChatId] },
      })
      .populate("messages");
    if (!Conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(Conversation.messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error while fetching msg" });
  }
};
