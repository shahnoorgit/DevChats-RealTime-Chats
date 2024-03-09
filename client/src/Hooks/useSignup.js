import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const useSignup = () => {
  const [Loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    gender,
    password,
    confirmPassword,
  }) => {
    const success = handleValidate({
      fullname,
      username,
      gender,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          gender,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      if (data.userInvalid) {
        toast.error(data.userInvalid);
        throw new Error(data.userInvalid);
      }
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      console.log(data);
    } catch (error) {
      toast.error("error while signing up", error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { Loading, signup };
};
export default useSignup;

const handleValidate = ({ password, confirmPassword }) => {
  if (password != confirmPassword) {
    toast.error("Password do not match confirm password");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be more then 6 words");
    return false;
  }

  return true;
};
