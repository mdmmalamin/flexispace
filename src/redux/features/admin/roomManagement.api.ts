import { TRoom } from "../../../types";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

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

    // getAllCourses: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();

    //     if (args) {
    //       args.forEach((item: TQueryParam) => {
    //         params.append(item.name, item.value as string);
    //       });
    //     }

    //     return {
    //       url: "/courses",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   providesTags: ["courses"],
    //   transformResponse: (response: TResponseRedux<TCourse[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),

    // addCourse: builder.mutation({
    //   query: (data) => ({
    //     url: `/courses/create-course`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["courses"],
    // }),
  }),
});

export const { useGetAllRoomsQuery } = roomManagementApi;
