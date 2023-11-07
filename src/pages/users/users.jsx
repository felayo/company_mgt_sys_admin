import React, { useState } from "react";
import {
  Box,
  useTheme,
  Dialog,
  Slide,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import Header from "../../components/layout/Header";
import {
  FlexBetween,
  GlobalButton,
} from "../../components/styledComponents/styledComponents";
import { useGetAllUserQuery } from "../../redux/features/user/userApiSlice";
import UsersList from "../../components/users/usersList";
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
        <Box
          sx={{
            backgroundColor: theme.palette.background.alt,
            borderRadius: "15px",
            width: "100%",
            padding: "50px 30px 30px 45px",
            marginTop: "20px",
          }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="users">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Add Profile</TableCell>
                </TableRow>
              </TableHead>
              {users?.data.map((user) => (
                <UsersList key={user._id} {...user} />
              ))}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  }

  return content;
};

export default Users;
