import { ApiSlice } from "../../app/api/apiSlice";

export const employeeApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEmployee: build.query({
      query: () => "/staff/profile",
      providesTags: ["Employee"],
    }),
    getEmployees: build.query({
      query: () => "/admin/staffs",
      providesTags: ["Employees"],
    }),
  }),
});

export const {
  useGetEmployeeQuery,
  useGetEmployeesQuery,
} = employeeApiSlice;
