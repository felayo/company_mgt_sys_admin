import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const AdminApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api` }),
  tagTypes: ["User", "VehicleRecord"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getVehicles: build.query({
      query: () => "/vehicle/records",
      providesTags: ["VehicleRecord"],
    }),
  }),
});

export const { useGetUserQuery, useGetVehiclesQuery } = AdminApiSlice;
