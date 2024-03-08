import { BiLogOut } from "react-icons/bi";
import useLogout from "../Hooks/useLogout";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const nav = useNavigate();
  const { Loading, logout } = useLogout();
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="mt-auto">
      {Loading ? (
        <span className=" loading loading-spinner" />
      ) : (
        <BiLogOut
          onClick={() => handleLogOut()}
          className=" h-6 w-6 cursor-pointer text-white"
        />
      )}
    </div>
  );
};

export default LogOut;
