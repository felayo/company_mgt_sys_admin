import { ApiSlice } from "../../app/api/apiSlice";

export const vehiclesApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getVehicles: build.query({
      query: () => "/vehicle/records",
      providesTags: ["VehicleRecord"],
    }),
  }),
});

export const { useGetVehiclesQuery } = vehiclesApiSlice;
