import "../styles/WebLayout.css";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
  return (
    <div>
      <div className="outlet-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default WebLayout;
