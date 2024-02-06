import { useParams } from "react-router-dom";
import { useAdminGetOneEmployeeQuery } from "../../redux/features/employee/employeeApiSlice";
import Profile from "../../components/employees/employeeProfile";
import { Box } from "@mui/material";

const EmployeeDetails = () => {
  const { userId } = useParams();
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useAdminGetOneEmployeeQuery(userId);

  const employee = data?.data;

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = (
      <p className="errmsg">{error?.data?.message}</p>
    );
  }

  if (isSuccess) {
    content = (
      <Box m="1.5rem 2.5rem">
        <Profile data={employee} />
      </Box>
    );
  }
  return content;
};

export default EmployeeDetails;
