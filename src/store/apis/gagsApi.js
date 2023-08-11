import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// dev only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const gagsApi = createApi({
  reducerPath: "gags",
  baseQuery: fetchBaseQuery({ baseUrl: `http://127.0.0.1:3001` }),
  endpoints(builder) {
    return {
      removeGag: builder.mutation({
        query: (gag) => {
          return {
            url: `/gags/${gag.id}`,
            method: "DELETE",
          };
        },
      }),

      fetchGags: builder.query({
        query: () => {
          return {
            url: "/gags",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchGagsQuery, useRemoveGagMutation } = gagsApi;
export { gagsApi };
