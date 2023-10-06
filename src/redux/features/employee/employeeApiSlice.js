import { ApiSlice } from "../../app/api/apiSlice";

export const employeeApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeProfile: build.query({
      query: () => "/employee/profile",
      providesTags: ["EmployeeProfile"],
    }),
    getEmployees: build.query({
      query: () => "/admin/employees",
      providesTags: ["Employees"],
    }),
    getOneEmployee: build.query({
      query: (userId) => `/admin/employees/${userId}`,
      providesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetEmployeeProfileQuery,
  useGetEmployeesQuery,
  useGetOneEmployeeQuery
} = employeeApiSlice;
