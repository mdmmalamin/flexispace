/* eslint-disable @typescript-eslint/no-explicit-any */
import { TRoom } from "../../../types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const roomPublicApi = baseApi.injectEndpoints({
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
  }),
});

export const { useGetAllPublicRoomsQuery } = roomPublicApi;
