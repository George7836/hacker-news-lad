import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { NewsPage } from "../../types/news";
import { getOnePieceOfNews } from "../../api/getSingleNews";

export const getSingleNews = createAsyncThunk(
  'news/getOnePeaceOfNews',
  async function(id: string | undefined, {rejectWithValue}) {
    try {
      return getOnePieceOfNews(id)
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
  updated: boolean
}

const initialState: SingleNewsState = {
  oneNews: null,
  id: '',
  loading: true,
  error: undefined,
  updated: false
}

const singleNewsSlice = createSlice({
  name: 'singleNews',
  initialState,
  reducers: {
    saveId(state, action) {
      state.id = action.payload
    },
    setUpdateOneNews(state) {
      state.updated = !state.updated
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
export const { saveId, setUpdateOneNews } = singleNewsSlice.actions
export default singleNewsSlice.reducer