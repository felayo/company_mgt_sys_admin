import { ApiSlice } from "../../app/api/apiSlice";

export const employeeApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEmployee: build.query({
      query: () => "/staff/profile",
      providesTags: ["Employee"],
    }),
  }),
});

export const { useGetEmployeeQuery } = employeeApiSlice;
