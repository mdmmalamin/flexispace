/* eslint-disable @typescript-eslint/no-explicit-any */
import { TRoom } from "../../../types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const bookingUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // params.append("isDeleted", "false");

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
      transformResponse: (response: TResponseRedux<TRoom[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addMyBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const { useGetMyBookingQuery, useAddMyBookingMutation } = bookingUserApi;
