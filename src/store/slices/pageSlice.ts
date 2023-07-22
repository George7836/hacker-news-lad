import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    page: 'main'
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload
    }
  }
})

export const userPageSelector = (state: RootState) => state.page
export const { changePage } = pageSlice.actions
export default pageSlice.reducer