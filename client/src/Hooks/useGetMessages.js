import { useEffect, useState } from "react";
import useConversation from "../zustand/conversation";
const useGetMessages = () => {
  const [Loading, setLoading] = useState(false);
  const { selectedconversation, messages, setMessages } = useConversation();

  useEffect(() => {
    setLoading(true);
    const Getmsg = async () => {
      try {
        const res = await fetch(`/api/messages/${selectedconversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedconversation?._id) Getmsg();
  }, [selectedconversation?._id, setMessages]);

  return { Loading, messages };
};

export default useGetMessages;
