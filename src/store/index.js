import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gagsApi } from "./apis/gagsApi";
import { commentsApi } from "./apis/commentApi";

export const store = configureStore({
  reducer: {
    [gagsApi.reducerPath]: gagsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(gagsApi.middleware)
      .concat(commentsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchGagsQuery,
  useRemoveGagMutation,
  useAddGagMutation,
} from "./apis/gagsApi";

export {
  useFetchCommentsQuery,
  useCreateCommentMutation,
} from "./apis/commentApi";
