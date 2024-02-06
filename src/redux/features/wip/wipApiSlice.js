import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { ApiSlice } from "../../app/api/apiSlice";
const wipAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = wipAdapter.getInitialState();

export const WipApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getWips: build.query({
      query: () => ({
        url: "/wip",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedWips = responseData.map((wip) => {
          wip.id = wip._id;
          return wip;
        });
        return wipAdapter.setAll(initialState, loadedWips);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Wip", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Wip", id })),
          ];
        } else return [{ type: "Wip", id: "LIST" }];
      },
    }),

    addNewWip: build.mutation({
      query: (initialWip) => ({
        url: "/wip",
        method: "POST",
        body: {
          ...initialWip,
        },
      }),
      invalidatesTags: [{ type: "Wip", id: "LIST" }],
    }),
  }),
});

export const { useGetWipsQuery, useAddNewWipMutation } = WipApiSlice;

// returns the query result object
export const selectWipResult = WipApiSlice.endpoints.getWips.select();

// creates memoized selector
const selectWipsData = createSelector(
  selectWipResult,
  (wipsResult) => wipsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllWips,
  selectById: selectWipById,
  selectIds: selectWipIds,
  // Pass in a selector that returns the notes slice of state
} = wipAdapter.getSelectors((state) => selectWipsData(state) ?? initialState);
