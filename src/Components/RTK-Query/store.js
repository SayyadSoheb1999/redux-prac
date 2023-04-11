import { configureStore } from "@reduxjs/toolkit";
import { StudendApi } from "./serviceApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [StudendApi.reducerPath]: StudendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StudendApi.middleware),
});
