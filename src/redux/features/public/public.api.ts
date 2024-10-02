/* eslint-disable @typescript-eslint/no-explicit-any */
import { TRoom } from "../../../types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TSlot } from "../../../types/slotManagement.type";
import { baseApi } from "../../api/baseApi";

const publicApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPublicRooms: builder.query({
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

    getAllPublicAvailableSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        params.append("isDeleted", "false");

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
  }),
});

export const { useGetAllPublicRoomsQuery, useGetAllPublicAvailableSlotsQuery } =
  publicApi;
