/* eslint-disable @typescript-eslint/no-explicit-any */
import { TRoom } from "../../../types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        params.append("isDeleted", "false");

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/rooms",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["room"],
      transformResponse: (response: TResponseRedux<TRoom[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    getSingleRoom: builder.query({
      query: (id) => {
        return {
          url: `/rooms/${id}`,
          method: "GET",
        };
      },

      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addRoom: builder.mutation({
      query: (data) => ({
        url: `/rooms`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["room"],
    }),

    updateRoom: builder.mutation({
      query: (args) => ({
        url: `/rooms/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["room"],
    }),

    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["room"],
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetSingleRoomQuery,
  useAddRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomManagementApi;
