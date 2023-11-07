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
      query(data) {
        const { id, ...body } = data
        return {
          url: `/admin/employees/${id}`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Employees']
    }),
    adminUploadDocument: build.mutation({
      query(document) {
        const { id, formData } = document
        return {
          url: `/admin/employees/${id}/upload`,
          method: 'PATCH',
          body: formData
        }
      },
      invalidatesTags: ["Employee"]
    })
  }),
});

export const {
  useGetEmployeeProfileQuery,
  useAdminGetEmployeesQuery,
  useAdminGetOneEmployeeQuery,
  useAdminAddNewEmployeeMutation,
  useAdminUploadDocumentMutation,
} = employeeApiSlice;
