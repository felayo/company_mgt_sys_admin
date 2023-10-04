import { ApiSlice } from "../../app/api/apiSlice";

export const employeeApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeProfile: build.query({
      query: () => "/staff/profile",
      providesTags: ["EmployeeProfile"],
    }),
    getEmployees: build.query({
      query: () => "/admin/staffs",
      providesTags: ["Employees"],
    }),
    getOneEmployee: build.query({
      query: (userId) => `/admin/staffs/${userId}`,
      providesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetEmployeeProfileQuery,
  useGetEmployeesQuery,
  useGetOneEmployeeQuery
} = employeeApiSlice;
