import React, { useState } from "react";
import { Box, useTheme, Dialog, Slide } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import Header from "../../components/layout/Header";
import {
  FlexBetween,
  GlobalButton,
} from "../../components/styledComponents/styledComponents";
import { useGetAllUserQuery } from "../../redux/features/user/userApiSlice";
//import EmployeeList from "../../components/employees/adminEmployeeList";
import AddUser from "../../components/users/addUser";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Users = () => {
  const [open, setOpen] = useState(false);
  const {
    data: users,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetAllUserQuery();

  console.log(users)

  const theme = useTheme();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    content = (
      <Box m="1.5rem 2.5rem">
        <FlexBetween>
          <Header title="USERS" subtitle="Managing Winelight Users" />
          <Box>
            <GlobalButton onClick={() => setOpen(true)}>
              <PersonAdd sx={{ mr: "10px" }} />
              Add User
            </GlobalButton>
            <Dialog
              keepMounted
              open={open}
              maxWidth="md"
              scroll="paper"
              TransitionComponent={Transition}
              aria-describedby="pop up to add new employee profile">
              <AddUser setOpen={setOpen} />
            </Dialog>
          </Box>
        </FlexBetween>
        <Box> </Box>
      </Box>
    );
  }

  return content;
};

export default Users;
