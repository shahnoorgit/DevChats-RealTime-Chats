import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/conversation";
import notification from "../assets/sound/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldshake = true;
      const notifysound = new Audio(notification);
      notifysound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket.off("newMessages");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
