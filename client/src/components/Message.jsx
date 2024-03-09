import { useAuthContext } from "../context/AuthContext";
import { extractTime } from "../utils/ExactTime";
import useConversation from "../zustand/conversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedconversation } = useConversation();
  const FormattedTime = extractTime(message.createdAt);
  const FromMe = authUser._id === message.senderId;
  const chatClassName = FromMe ? "chat-end" : "chat-start";
  const profilePic = FromMe
    ? authUser.profilePic
    : selectedconversation.profilePic;
  const bubbleColor = FromMe ? "bg-blue-500" : "bg-gray-700";
  const shakeClass = message.shouldshake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className=" chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="User pic" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {FormattedTime}
      </div>
    </div>
  );
};

export default Message;
