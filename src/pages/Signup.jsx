import "../styles/Auth.css";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Button from "../components/Button";
import { AuthInputController } from "../components/AuthInputController";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountries } from "../services/Country";
import WorldMap from "../assets/misc/worldmap.png";

const Signup = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);
  const [countries, setCountries] = useState(null);
  // eslint-disable-next-line
  const [selectedCountry, setSelectedCountry] = useState("Ghana");

  useEffect(() => {
    const fetch = async () => {
      const allCountries = await getCountries();
      setCountries(allCountries);
    };

    fetch();
  }, []);

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
            <div className="auth-form-title-text">Create Your Account</div>
            <div className="auth-form-title-text-helper">
              Already have a Welfare account?{" "}
              <span onClick={navigateTo("/login")} className="key">
                Login
              </span>
            </div>
          </div>
          <Box component="form" className="auth-form-body">
            <div className="auth-duo-input-controller">
              <AuthInputController labelText={"First Name"}>
                <TextField fullWidth size="small" />
              </AuthInputController>
              <AuthInputController labelText={"Last Name"}>
                <TextField fullWidth size="small" />
              </AuthInputController>
            </div>

            <AuthInputController labelText={"Email"}>
              <TextField type="email" fullWidth size="small" />
            </AuthInputController>

            <AuthInputController labelText={"Country"}>
              <FormControl size="small" fullWidth>
                <Select
                  MenuProps={{
                    elevation: 0,
                    slotProps: {
                      paper: {
                        sx: {
                          border: "1px solid var(--bg-gray-10)",
                          maxHeight: 300,
                          width: 300,
                          mt: 1,
                          padding: "10px",
                        },
                      },
                    },
                  }}
                  value={selectedCountry}
                >
                  {countries ? (
                    countries.length > 0 ? (
                      countries.map((country, index) => (
                        <MenuItem
                          className="menu-item"
                          key={index}
                          value={country.name}
                        >
                          <div className="country-auth-input-controller-inner">
                            <div className="country-auth-input-flag-image">
                              <img src={country.flag} alt="" />
                            </div>
                            <div>{country.name}</div>
                          </div>
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem className="menu-item" value={selectedCountry}>
                        {selectedCountry}
                      </MenuItem>
                    )
                  ) : (
                    <MenuItem className="menu-item" value={selectedCountry}>
                      {selectedCountry}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </AuthInputController>

            <AuthInputController labelText={"Mobile"}>
              <TextField
                InputProps={
                  countries
                    ? countries.length > 0
                      ? {
                          startAdornment: (
                            <InputAdornment position="start">
                              {"+"}
                              {countries
                                .filter(
                                  (country) => country.name === selectedCountry
                                )
                                .map((country) => country.callingCode)}
                            </InputAdornment>
                          ),
                        }
                      : {}
                    : {}
                }
                fullWidth
                size="small"
              />
            </AuthInputController>

            <AuthInputController labelText={"Account Type"}>
              <FormControl size="small" fullWidth>
                <Select
                  MenuProps={{
                    elevation: 0,
                    slotProps: {
                      paper: {
                        sx: {
                          border: "1px solid var(--bg-gray-10)",
                          maxHeight: 300,
                          width: 300,
                          mt: 1,
                          padding: "10px",
                        },
                      },
                    },
                  }}
                  value={"Individual"}
                >
                  <MenuItem value={"Individual"} className="menu-item">
                    Individual
                  </MenuItem>
                  <MenuItem value={"Organization"} className="menu-item">
                    Orgainization
                  </MenuItem>
                </Select>
              </FormControl>
            </AuthInputController>

            <AuthInputController labelText={"Password"}>
              <TextField type="password" fullWidth size="small" />
            </AuthInputController>

            <AuthInputController>
              <Button theme={"0_0"} variant={"contained"} label={"Sign Up"} />
            </AuthInputController>
            <div className="auth-form-footer"></div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Signup;
