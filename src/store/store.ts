import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import pageSlice from "./pageSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
    page: pageSlice
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;