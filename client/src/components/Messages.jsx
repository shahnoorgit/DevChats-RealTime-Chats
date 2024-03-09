import Message from "./Message";
import useGetMessages from "../Hooks/useGetMessages.js";
import SkullMSG from "../components/skeliton/SkullMSG.jsx";
import { useEffect, useRef } from "react";
import useListenMessages from "../Hooks/useListenMessages";

const Messages = () => {
  const { Loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessage = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className=" overflow-auto px-4 flex-1">
      {Loading && [...Array(3)].map((_, idx) => <SkullMSG key={idx} />)}
      {!Loading && messages.length === 0 && (
        <p className="text-center">Send Hi To Start Conversation!</p>
      )}
      {!Loading &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
