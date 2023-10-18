import React, { useState } from "react";
import { Box, Grid, useTheme, Dialog, Slide } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import Header from "../../components/layout/Header";
import {
  FlexBetween,
  GlobalButton,
} from "../../components/styledComponents/styledComponents";
import { useAdminGetEmployeesQuery } from "../../redux/features/employee/employeeApiSlice";
import EmployeeList from "../../components/employees/adminEmployeeList";
import AddEmployeeProfile from "../../components/employees/form/adminAddEmployeeProfile";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Employees = () => {
  const [open, setOpen] = useState(false);
  const {
    data: employees,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useAdminGetEmployeesQuery();

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
          <Header title="EMPLOYEES" subtitle="Managing Winelight Employees" />
          <Box>
            <GlobalButton onClick={() => setOpen(true)}>
              <PersonAdd sx={{ mr: "10px" }} />
              Add Employee
            </GlobalButton>
            <Dialog
              keepMounted
              open={open}
              maxWidth="md"
              scroll="paper"
              TransitionComponent={Transition}
              aria-describedby="pop up to add new employee profile">
              <AddEmployeeProfile setOpen={setOpen} />
            </Dialog>
          </Box>
        </FlexBetween>
        <Box
          sx={{
            backgroundColor: theme.palette.background.alt,
            borderRadius: "15px",
            width: "94%",
            padding: "50px 30px 30px 45px",
            marginTop: "20px",
          }}>
          <Grid container spacing={2}>
            {employees?.data.map((employee) => (
              <EmployeeList key={employee._id} {...employee} />
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }

  return content;
};

export default Employees;
