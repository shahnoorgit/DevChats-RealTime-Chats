import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [Loading, setLoading] = useState(false);
  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, Loading };
};

export default useLogin;
