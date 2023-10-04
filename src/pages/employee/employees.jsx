import { Box, Grid, useTheme } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import Header from "../../components/layout/Header";
import {
  FlexBetween,
  GlobalButton,
} from "../../components/styledComponents/styledComponents";
import { useGetEmployeesQuery } from "../../redux/features/employee/employeeApiSlice";
import EmployeeList from "../../components/employees/EmployeeList";

const Employees = () => {
  const {
    data: employees,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetEmployeesQuery();

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
          <GlobalButton>
            <PersonAdd sx={{ mr: "10px" }} />
            Add Employee
          </GlobalButton>
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
