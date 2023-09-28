import { Routes, Route } from "react-router-dom";
import WebLayout from "./layouts/WebLayout";
import ClientLayout from "./layouts/protected/ClientLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ClientCampaign from "./pages/protected/Campaign";
import ClientHome from "./pages/protected/Home";
import ClientCampaigns from "./pages/protected/Campaigns";
import ClientProfile from "./pages/protected/Profile";
import CampaignOwnerProfile from "./pages/protected/CampaignOwnerProfile";
import ClientLayoutWithGreeting from "./layouts/protected/ClientLayoutWithGreeting";
import CampaignLayout from "./layouts/protected/CampaignLayout";
import CampaignOwnerProfileLayout from "./layouts/protected/CampaignOwnerProfileLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<ClientLayout />}>
          <Route element={<ClientLayoutWithGreeting />}>
            <Route path="/home" element={<ClientHome />} />
            <Route path="/campaigns" element={<ClientCampaigns />} />
            <Route path="/profile" element={<ClientProfile />} />
          </Route>
          <Route element={<CampaignLayout />}>
            <Route path="campaign" element={<ClientCampaign />} />
          </Route>
          <Route element={<CampaignOwnerProfileLayout />}>
            <Route path="owner" element={<CampaignOwnerProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
};

export default App;