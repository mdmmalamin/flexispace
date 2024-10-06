import { TResponseRedux } from "../../../types/global";
import { TUser } from "../../../types/user.type";
import { baseApi } from "../../api/baseApi";

const myProfile = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => {
        return {
          url: `/auth/users/my-profile`,
          method: "GET",
        };
      },

      transformResponse: (response: TResponseRedux<TUser>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useGetMyProfileQuery } = myProfile;
