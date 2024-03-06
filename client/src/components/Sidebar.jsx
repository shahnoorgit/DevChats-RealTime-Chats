import Search from "./Search";
import MessageCon from "./MessageCon";
import LogOut from "./LogOut";

const Sidebar = () => {
  return (
    <div className=" flex flex-col border-slate-500 border-r p-4">
      <Search />
      <div className=" divider p-3" />
      <MessageCon />
      <LogOut />
    </div>
  );
};

export default Sidebar;
