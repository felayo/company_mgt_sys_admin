import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const AdminApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    prepareHeaders: (headers, { getState }) => {
      // console.log(getState())
      const token = getState().auth.userInfo?.token;
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  tagTypes: ["User", "VehicleRecord", "AllEmployees"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getVehicles: build.query({
      query: () => "/vehicle/records",
      providesTags: ["VehicleRecord"],
    }),
    getEmployees: build.query({
      query: () => "/admin/staffs",
      providesTags: ["AllEmployees"],
    }),
    login: build.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email: payload.email,
          password: payload.password,
        },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetVehiclesQuery,
  useGetEmployeesQuery,
  useLoginMutation,
} = AdminApiSlice;
