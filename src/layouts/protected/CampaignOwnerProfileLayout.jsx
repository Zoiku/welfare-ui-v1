import { Outlet } from "react-router-dom";
import "../../styles/CampaignProfileLayout.css";

const CampaignLayout = () => {
  return (
    <div className="campaign-profile-layout">
      <div className="campaign-profile-layout-inner">
        <Outlet />
      </div>
    </div>
  );
};

export default CampaignLayout;
