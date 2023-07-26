import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { NewsPage } from "../../types/news";

export const getSingleNews = createAsyncThunk(
  'news/getOnePeaceOfNews',
  async function(id: string, {rejectWithValue}) {
    try {
      const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`, {cache: 'no-store'})
      .then((data) => {
        if(!data.ok) {
          throw new Error('Error!')
        }
        return data.json()
      })
      return response
    } catch(error: any) {
      return rejectWithValue(error.message)
    }
  }
)

type SingleNewsState = {
  oneNews: NewsPage | null
  id: string
  loading: boolean
  error?: string
}

const initialState: SingleNewsState = {
  oneNews: null,
  id: '',
  loading: false,
  error: undefined
}

const singleNewsSlice = createSlice({
  name: 'singleNews',
  initialState,
  reducers: {
    saveId(state, action) {
      state.id = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSingleNews.fulfilled, (state, action: PayloadAction<NewsPage>) => {
      state.loading = false
      state.oneNews = action.payload
    }),
    builder.addCase(getSingleNews.pending, (state) => {
      state.loading = true
    }),
    builder.addCase(getSingleNews.rejected, (state, action) => {
      state.loading = false;
      state.oneNews = null;
      state.error = action.error.message;
    })
  }
})

export const userSingleNewsSelector = (state: RootState) => state.single
export const { saveId } = singleNewsSlice.actions
export default singleNewsSlice.reducer