import { ApiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getAllUser: build.query({
      query: () => "/user",
      providesTags: ["Users"],
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAllUserQuery,
  useAddUserMutation,
} = usersApiSlice;
