import "../../styles/ClientLayout.css";
import { Outlet } from "react-router-dom";
import CenteredContainer from "../../components/CenteredContainer";
import BottomNavigation from "../../components/protected/BottomNavigation";
import Nav from "../../components/protected/Nav";

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <div></div>
      <Nav />
      <div className="client-layout-outlet">
        <CenteredContainer>
          <Outlet />
          <BottomNavigation />
        </CenteredContainer>
      </div>
    </div>
  );
};

export default ClientLayout;
