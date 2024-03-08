import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversation = () => {
  const [Loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getCoversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        error;
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCoversations();
  }, []);
  return { Loading, conversation };
};

export default useGetConversation;
