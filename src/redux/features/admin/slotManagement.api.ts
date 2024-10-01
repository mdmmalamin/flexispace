/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TSlot } from "../../../types/slotManagement.type";
import { baseApi } from "../../api/baseApi";

const slotManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        params.append("isBooked", "false");

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/slots/availability",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slot"],
      transformResponse: (response: TResponseRedux<TSlot[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    getSingleSlot: builder.query({
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

    addSlot: builder.mutation({
      query: (data) => ({
        url: `/rooms`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["room"],
    }),

    updateSlot: builder.mutation({
      query: (args) => ({
        url: `/rooms/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["room"],
    }),

    deleteSlot: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["room"],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useGetSingleSlotQuery,
  useAddSlotMutation,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = slotManagementApi;
