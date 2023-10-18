import { useParams } from "react-router-dom";
import { useAdminGetOneEmployeeQuery } from "../../redux/features/employee/employeeApiSlice";
import Profile from "../../components/employees/employeeProfile";

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
      <p className="errmsg">
        {error?.data?.message == "jwt expired"
          ? "refresh this page"
          : error?.data?.message}
      </p>
    );
  }

  if (isSuccess) {
    content = <Profile data={employee} />;
  }
  return content;
};

export default EmployeeDetails;
