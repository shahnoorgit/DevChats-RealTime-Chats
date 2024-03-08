import { useState } from "react";
import { MdSend } from "react-icons/md";
import useSendMsg from "../Hooks/useSendMsg";
const MessageInput = () => {
  const { Loading, sendmsg } = useSendMsg();
  const [message, setMessage] = useState("");
  const sendMSG = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendmsg(message);
    setMessage("");
  };
  return (
    <form onSubmit={(e) => sendMSG(e)} className="px-4 my-3 ">
      <div className=" w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Write a message..."
          className=" border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button className=" absolute inset-y-0 end-0 flex items-center pe-3">
          {Loading ? <span className=" loading loading-spinner" /> : <MdSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
