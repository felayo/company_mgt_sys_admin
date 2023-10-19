/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  DialogContent,
  Box,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";

const Closebutton = styled(Close)({
  margin: "10px 0 0 10px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const PasswordErrorMessage = () => {
  return (
    <Box component="p" color="red">
      Password should have at least 8 characters
    </Box>
  );
};

const AddUser = ({ setOpen }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      username &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setEmail("");
    setUsername("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <Box>
      <Closebutton onClick={() => setOpen(false)} />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                size="small"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                size="small"
                value={password.value}
                type="password"
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Select
                  labelId="role"
                  value={role}
                  size="small"
                  label="Role"
                  onChange={(e) => setRole(e.target.value)}>
                  <MenuItem value="role">Role</MenuItem>
                  <MenuItem value="employee">Employee</MenuItem>
                  <MenuItem value="admin">HR</MenuItem>
                  <MenuItem value="service">Service</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                disabled={!getIsFormValid()}
                type="submit"
                color="success"
                size="medium"
                sx={{ margin: "0px auto" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Box>
  );
};

export default AddUser;
