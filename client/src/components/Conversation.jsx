import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/conversation";

const Conversation = ({
  Switch,
  setSwitch,
  fullname,
  profilePic,
  emoji,
  lastidx,
  convertation,
}) => {
  const { selectedconversation, setconversition } = useConversation();
  const isSelected = selectedconversation?._id === convertation._id;
  const handleClick = () => {
    setconversition(convertation);
    setSwitch(!Switch);
    console.log("hy");
  };
  const { userOnline } = useSocketContext();

  const isOnline = userOnline.includes(convertation._id);
  return (
    <>
      <div
        onClick={() => handleClick()}
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profilePic} alt="User pic" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="divider h-1 my-0 py-0" />}
    </>
  );
};

export default Conversation;
