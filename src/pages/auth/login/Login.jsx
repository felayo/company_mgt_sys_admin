import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../redux/app/api/api";
import { setCredentials } from "../../../redux/features/auth/authSlice"
import "./Login.css";
//import { useFormik } from "formik";
//import { LoginValidation } from "./Validator";

import logo from "../../../assets/logo.png";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  
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
              <form method="POST" className="login_form">
                <div className="login_form_group">
                  <label htmlFor="email" className="login_label">
                    Email Address:{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="login_input"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="login_form_group">
                  <label htmlFor="password" className="login_label">
                    Password:{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="login_input"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="login_button"
                  onClick={handleSubmit}
                  type="submit">
                  Login
                </button>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
