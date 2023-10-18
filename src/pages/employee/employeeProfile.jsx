import { useGetEmployeeProfileQuery } from "../../redux/features/employee/employeeApiSlice";
import Profile from "../../components/employees/employeeProfile";

const EmployeeProfile = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetEmployeeProfileQuery();

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

export default EmployeeProfile;
