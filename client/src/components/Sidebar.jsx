import Search from "./Search";
import MessageCon from "./MessageCon";
import LogOut from "./LogOut";

const Sidebar = ({ Switch, SetSwitch }) => {
  return (
    <div
      className={`max-sm:min-h-[90vh] max-sm:min-w-[358px] flex flex-col  border-slate-500 border-r p-4 ${
        Switch ? "max-sm:hidden" : ""
      }`}
    >
      <Search />
      <div className=" divider p-3" />
      <MessageCon Switch={Switch} setSwitch={SetSwitch} />
      <LogOut />
    </div>
  );
};

export default Sidebar;
