import { IconButton } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import "../../styles/CampaignLayout.css";

const CampaignLayout = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1, { replace: true });

  return (
    <div className="campaign-layout">
      <div className="campaign-layout-inner">
        <IconButton
          onClick={goBack}
          className="campaign-layout-back-button"
          size="large"
        >
          <KeyboardBackspaceRoundedIcon color="inherit" />
        </IconButton>
      </div>
      <div className="campaign-layout-inner">
        <Outlet />
      </div>
    </div>
  );
};

export default CampaignLayout;
