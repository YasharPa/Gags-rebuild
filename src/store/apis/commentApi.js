import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001",
  }),
  endpoints(builder) {
    return {
      fetchComments: builder.query({
        query: (gag) => {
          return { url: "/comments", params: { gagId: gag.id }, method: "GET" };
        },
      }),
    };
  },
});

export const { useFetchCommentsQuery } = commentsApi;
export { commentsApi };
