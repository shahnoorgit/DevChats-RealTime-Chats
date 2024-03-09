import { useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import useConversation from "../zustand/conversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../context/AuthContext";
const MessageScreen = ({ Switch, setSwitch }) => {
  const { selectedconversation, setconversition } = useConversation();
  useEffect(() => {
    //cleanup or unmouting comnponent
    return () => setconversition(null);
  }, [setconversition]);
  const noChats = true;
  return (
    <div
      className={` max-sm:min-h-[97vh] max-sm:min-w-[97vw] max-sm:max-w-[97vw] max-sm:max-h-[97vh] md:min-w-[450px] flex flex-col ${
        Switch ? "" : "max-sm:hidden"
      }`}
    >
      {!selectedconversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/*Header*/}
          <div className=" flex align-baseline  justify-start bg-slate-500 px-4 py-2 mb-2">
            <button onClick={() => setSwitch(!Switch)} className=" md:hidden">
              {" "}
              <IoMdArrowRoundBack className=" text-white mr-10 text-xl" />
            </button>

            <span className="label-text mr-2"> To: </span>
            <span className=" text-gray-900 font-bold">
              {" "}
              {selectedconversation.fullname}{" "}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
export default MessageScreen;
