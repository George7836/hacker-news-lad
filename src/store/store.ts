import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;