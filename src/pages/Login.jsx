import "../styles/Auth.css";
import { Box, TextField } from "@mui/material";
import Button from "../components/Button";
import { AuthInputController } from "../components/AuthInputController";
import { useNavigate } from "react-router-dom";
import WorldMap from "../assets/misc/worldmap.png";

const Login = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);

  return (
    <div className="auth-page">
      <div className="auth-page-inner auth-left-container">
        <div className="auth-page-overlay">
        <div className="auth-overlay-image">
            <img src={WorldMap} alt="" />
          </div>
        </div>
        <div className="auth-meta">
          <div className="auth-meta-inner">
            <div className="auth-meta-title">Welfare UI</div>
            <div className="auth-meta-details">
              <div className="auth-meta-details-title">
                Begin your Welfare journey by creating your account
              </div>
              <div>
                <ul className="auth-meta-details-list">
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio, accusantium.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, nesciunt!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, necessitatibus?
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae, repellendus!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam, doloremque.
                  </li>
                </ul>
              </div>
              <div className="auth-meta-call-to-action">
                Get started now, create your account to begin
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-page-inner auth-right-container">
        <div className="auth-form">
          <div className="auth-form-title">
            <div className="auth-form-title-text">Access Welfare App</div>
            <div className="auth-form-title-text-helper">
              Don't have an account?{" "}
              <span onClick={navigateTo("/signup")} className="key">
                Signup
              </span>
            </div>
          </div>
          <Box autoComplete="off" component="form" className="auth-form-body">
            <AuthInputController labelText={"Email"}>
              <TextField type="email" fullWidth size="small" />
            </AuthInputController>

            <AuthInputController
              labelText={"Password"}
              labelHelper={"Forgot Password"}
            >
              <TextField type="password" fullWidth size="small" />
            </AuthInputController>

            <AuthInputController>
              <Button
                theme={"0_0"}
                label={"Login"}
                onClick={navigateTo("/home")}
                variant={"contained"}
              />
            </AuthInputController>

            <div className="auth-form-footer"></div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
