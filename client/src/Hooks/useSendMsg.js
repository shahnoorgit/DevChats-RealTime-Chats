import { useState } from "react";
import useConversation from "../zustand/conversation";
const useSendMsg = () => {
  const { selectedconversation, messages, setMessages } = useConversation();
  const [Loading, setLoading] = useState(false);
  const sendmsg = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedconversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, sendmsg };
};

export default useSendMsg;
