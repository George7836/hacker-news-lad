import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types/news";
import { RootState } from "../store";

export interface NewsState {
  loading: boolean;
  news: Array<News>;
  error?: string;
}
const initialState: NewsState = {
  loading: false,
  news: [],
  error: undefined,
}

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async function(_, {rejectWithValue}) {
    try {
      const arr = new Array(4).fill(null);

      const res = await Promise.all(
        arr.map((_, page) => {
          return fetch(`https://api.hnpwa.com/v0/newest/${page + 1}.json`, {cache: 'no-store'})
            .then((res) => {
              if(!res.ok) {
                throw new Error('Error!')
              }
              return res.json()
            })
        })
      )
        .then((data) => data.flat().slice(0,100))

      return res
    } catch(error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNews.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getAllNews.fulfilled, (state, action: PayloadAction<Array<News>>) => {
      state.loading = false;
      state.news = action.payload
    }),
    builder.addCase(getAllNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    })
  }
})

export const userSelector = (state: RootState) => state.news
export default newsSlice.reducer