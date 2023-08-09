import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const gagsApi = createApi({
  reducerPath: "gags",
  baseQuery: fetchBaseQuery({ baseUrl: `http://127.0.0.1:3001` }),
  endpoints(builder) {
    return {
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

export const { useFetchGagsQuery } = gagsApi;
export { gagsApi };
