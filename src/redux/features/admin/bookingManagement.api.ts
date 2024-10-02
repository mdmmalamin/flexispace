/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBooking } from "../../../types/bookingManagement.type";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        params.append("isDeleted", "false");

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
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    updateBooking: builder.mutation({
      query: (args) => ({
        url: `/bookings/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["booking"],
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingManagementApi;
