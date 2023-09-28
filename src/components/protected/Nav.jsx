import { useLocation } from "react-router-dom";
import "../../styles/Nav.css";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="client-nav">
      <div className="client-nav-inner">Welware App{location.pathname}</div>
    </div>
  );
};

export default Nav;
