import { ApiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getAllEmployees: build.query({
      query: () => "/admin/staffs",
      providesTags: ["AllEmployees"],
    }),
  }),
});

export const { useGetUserQuery, useGetAllEmployeesQuery } = usersApiSlice;
