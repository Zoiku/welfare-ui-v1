import "../../styles/BottomNavigation.css";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { NavLink } from "react-router-dom";
import { OtherHousesRounded } from "@mui/icons-material";

const BottomNavigationItem = ({ label, icon, path }) => {
  return (
    <NavLink to={path} className="bottom-navigation-item">
      <div className="bottom-navigation-item-inner bottom-navigation-item-icon">
        {icon}
      </div>
      <div className="bottom-navigation-item-inner bottom-navigation-item-label">
        {label}
      </div>
    </NavLink>
  );
};

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation">
      <div className="bottom-navigation-inner">
        <BottomNavigationItem
          icon={<OtherHousesRounded fontSize="small" />}
          label={"Home"}
          path={"/home"}
        />
        <BottomNavigationItem
          icon={<SavingsRoundedIcon fontSize="small" />}
          label={"Campaigns"}
          path={"/campaigns"}
        />
        <BottomNavigationItem
          icon={<PersonRoundedIcon fontSize="small" />}
          label={"Profile"}
          path={"/profile"}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
