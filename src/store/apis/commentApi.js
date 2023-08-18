import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001",
  }),
  endpoints(builder) {
    return {
      fetchComments: builder.query({
        providesTags: (result, error, gag) => {
          const tags = result.map((photo) => {
            return { type: "Comment", id: gag.id };
          });
          tags.push({ type: "GagComment", id: gag.id });
          return tags;
        },
        query: (gag) => {
          return {
            url: "/comments",
            params: { gagId: gag.id },
            method: "GET",
          };
        },
      }),
      createComment: builder.mutation({
        invalidatesTags: (result, error, gag) => {
          return [{ type: "Comment", id: gag.id }];
        },
        query: ({ gag, newComment }) => {
          return {
            url: "/comments",
            method: "POST",
            body: {
              gagId: gag.id,
              commentText: newComment,
            },
          };
        },
      }),
    };
  },
});

export const { useFetchCommentsQuery, useCreateCommentMutation } = commentsApi;
export { commentsApi };
