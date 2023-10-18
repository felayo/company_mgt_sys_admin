import { ApiSlice } from "../../app/api/apiSlice";

export const employeeApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeProfile: build.query({
      query: () => "/employee/profile",
      providesTags: ["EmployeeProfile"],
    }),
    adminGetEmployees: build.query({
      query: () => "/admin/employees",
      providesTags: ["Employees"],
    }),
    adminGetOneEmployee: build.query({
      query: (userId) => `/admin/employees/${userId}`,
      providesTags: ["Employee"],
    }),
    adminAddNewEmployee: build.mutation({
      query: (args) => ({
        url: `/admin/employees/${args.id}`,
        method: "POST",
        body: {
          ...args.initialProfile
        },
      }),
    }),
  }),
});

export const {
  useGetEmployeeProfileQuery,
  useAdminGetEmployeesQuery,
  useAdminGetOneEmployeeQuery,
  useAdminAddNewEmployeeMutation,
} = employeeApiSlice;
