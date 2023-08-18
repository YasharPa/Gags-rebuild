import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// dev only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const gagsApi = createApi({
  reducerPath: "gags",

  baseQuery: fetchBaseQuery({
    baseUrl: `http://127.0.0.1:3001`,
    fetchFn: async (...args) => {
      await pause(500);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      editGag: builder.mutation({
        invalidatesTags: (result, error, gag) => {
          return [{ type: "Gag", id: gag.id }];
        },
        query: ({ gag, content }) => {
          return {
            url: `/gags/${gag.id}`,
            method: "PUT",
            body: { ...gag, content: content },
          };
        },
      }),

      addGag: builder.mutation({
        invalidatesTags: (result, error, gag) => {
          return [{ type: "Gag", id: gag.id }];
        },
        query: (gagProp) => {
          return {
            url: `/gags`,
            method: "POST",
            body: {
              content: gagProp.content,
              url: gagProp.url,
              likes: 0,
            },
          };
        },

        onError: (error) => {
          throw new Error(`"An error occurred: ${error}`);
        },
      }),

      addLikeById: builder.mutation({
        invalidatesTags: (result, error, gag) => {
          return [{ type: "Gag", id: gag.id }];
        },
        query: (gag) => {
          return {
            url: `/gags/${gag.id}`,
            method: "PUT",
            body: { ...gag, likes: gag.likes + 1 },
          };
        },
        onError: (error) => {
          throw new Error(`"An error occurred: ${error}`);
        },
      }),

      removeGag: builder.mutation({
        invalidatesTags: (result, error, gag) => {
          return [{ type: "Gag", id: gag.id }];
        },
        query: (gag) => {
          return {
            url: `/gags/${gag.id}`,
            method: "DELETE",
          };
        },
      }),

      fetchGags: builder.query({
        providesTags: (result, error) => {
          const tags = result.map((gag) => {
            return { type: "Gag", id: gag.id };
          });
          return tags;
        },
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

export const {
  useFetchGagsQuery,
  useRemoveGagMutation,
  useAddGagMutation,
  useAddLikeByIdMutation,
  useEditGagMutation,
} = gagsApi;
export { gagsApi };
