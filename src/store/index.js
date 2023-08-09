import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gagsApi } from "./apis/gagsApi";

export const store = configureStore({
  reducer: {
    [gagsApi.reducerPath]: gagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gagsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchGagsQuery } from "./apis/gagsApi";
