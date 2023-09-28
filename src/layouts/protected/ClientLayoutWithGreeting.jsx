import Welcome from "../../components/protected/Welcome";
import { Outlet } from "react-router-dom";

const ClientLayoutWithGreeting = () => {
  return (
    <div>
      <Welcome />
      <Outlet />
    </div>
  );
};

export default ClientLayoutWithGreeting;
