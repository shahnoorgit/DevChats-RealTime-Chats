import { useState } from "react";
import MessageScreen from "../components/MessageScreen";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [switchScreenForMobile, setSwitchScreenForMobile] = useState(false);
  return (
    <>
      {" "}
      <div className="flex max-sm:flex-col sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar
          Switch={switchScreenForMobile}
          SetSwitch={setSwitchScreenForMobile}
        />
        <MessageScreen
          Switch={switchScreenForMobile}
          setSwitch={setSwitchScreenForMobile}
        />
      </div>
    </>
  );
};

export default Home;
