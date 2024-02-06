import { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApiSlice";
import { setCredentials } from "../../../redux/features/auth/authSlice";
import "./Login.css";
//import { useFormik } from "formik";
//import { LoginValidation } from "./Validator";
import logo from "../../../assets/logo.png";

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
              <Link to="/">
                <img src={logo} className="login_logo" alt="logo" />
              </Link>
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

                <button className="login_button" type="submit">
                  Login
                </button>

                <label htmlFor="persist" className="form__persist">
                  <input
                    type="checkbox"
                    className="form__checkbox"
                    id="persist"
                    onChange={handleToggle}
                    checked={persist}
                  />
                  Stay on this device
                </label>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
