import Conversation from "./Conversation";
import useGetConversation from "../Hooks/useGetConversation";
import { getRandomEmoji } from "../utils/emojis";

const MessageCon = ({ setSwitch, Switch }) => {
  const { Loading, conversation } = useGetConversation();
  return (
    <div className=" py-2 px-1 flex flex-col overflow-auto">
      {conversation.map((user, idx) => (
        <Conversation
          Switch={Switch}
          setSwitch={setSwitch}
          key={user._id}
          fullname={user.fullname}
          profilePic={user.profilePic}
          emoji={getRandomEmoji()}
          lastidx={idx === conversation.length - 1}
          convertation={user}
        />
      ))}
      {Loading ? (
        <center>
          <span className=" loading loading-spinner" />
        </center>
      ) : null}
    </div>
  );
};

export default MessageCon;
