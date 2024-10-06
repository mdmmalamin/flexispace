import { TQueryParam, TResponseRedux } from "../../../types/global";
import { TSlot } from "../../../types/slotManagement.type";
import { baseApi } from "../../api/baseApi";

const slotsUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAvailableSlots: builder.query({
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
      providesTags: ["slot", "booking"],
      transformResponse: (response: TResponseRedux<TSlot[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetAllAvailableSlotsQuery } = slotsUserApi;
