import { useEffect, useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApiSlice";
import { setCredentials } from "../../../redux/features/auth/authSlice";
import "./Login.css";

import usePersist from "../../../hooks/usePersist";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();
  const { isManager } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ token }));
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };
  // handle persist login toggle
  const handleToggle = () => setPersist((prev) => !prev);
  const errClass = errMsg ? "errmsg" : "offscreen";
  if (isLoading) return <p>Loading...</p>;

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={0} sm={0} md={6}>
          <div className="login_leftside"></div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className="login_rightside">
            <Box className="login_div">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h5"
                  component="h1"
                  pt={10}
                  pb={3}
                  color="#0ADB42"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}>
                  Go to WINELIGHT Website
                </Typography>
              </Link>
              <Box style={{ minWidth: "60%" }}>
                <Typography
                  variant="h4"
                  component="p"
                  fontWeight="bold"
                  pb={6}
                  sx={{
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 35,
                      left: "6%",
                      transform: "translateX(-50%)",
                      width: "40px",
                      height: "4px",
                      backgroundColor: "#0ADB42",
                    },
                  }}>
                  Welcome Back!
                </Typography>
              </Box>
              <Typography
                ref={errRef}
                className={errClass}
                aria-live="assertive"></Typography>
              <form
                method="POST"
                className="login_form"
                onSubmit={handleSubmit}>
                <div className="login_form_group">
                  <label htmlFor="email" className="login_label">
                    Email Address:{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    ref={userRef}
                    value={email}
                    className="login_input"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="login_form_group">
                  <label htmlFor="password" className="login_label">
                    Password:{" "}
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className="login_input"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="button_section">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked  onChange={handleToggle}/>}
                      label="Stay on this device"
                      style={{ color: 'white', fontSize: '16px' }}
                    />
                  </FormGroup>

                  <button className="login_button" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
