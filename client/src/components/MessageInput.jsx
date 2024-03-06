import { MdSend } from "react-icons/md";
const MessageInput = () => {
  return (
    <form className="px-4 my-3 ">
      <div className=" w-full relative">
        <input
          type="text"
          placeholder="Write a message..."
          className=" border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button className=" absolute inset-y-0 end-0 flex items-center pe-3">
          <MdSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
