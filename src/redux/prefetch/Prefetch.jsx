import { store } from "../app/store";
import { employeeApiSlice } from "../features/employee/employeeApiSlice";
import { vehiclesApiSlice } from "../features/vehicle/vehiclesApiSlice";
import { usersApiSlice } from "../features/user/userApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      employeeApiSlice.util.prefetch("getEmployeeProfile", "employee_profile_data", {
        force: true,
      })
    );
    store.dispatch(
      employeeApiSlice.util.prefetch("adminGetEmployees", "all_employees_list", {
        force: true,
      })
    );
    store.dispatch(
      usersApiSlice.util.prefetch("getAllUser", "all_users", { force: true })
    );
    store.dispatch(
      vehiclesApiSlice.util.prefetch("getVehicles", "vehicles_list", {
        force: true,
      })
    );
  }, []);

  return <Outlet />;
};
export default Prefetch;
