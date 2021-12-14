import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
import { getListMovie } from "./api";

const initialState = {
  MovieList: [],
};

export const getMovieList = createAsyncThunk(
  "Movie-List",
  async (data, thunkAPI) => {
    try {
      const res = await getListMovie();
      return res.data.content;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const home = createSlice({
  name: "Home",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieList.fulfilled.type]: (
      state: SetStateAction<any>,
      action: PayloadAction<string>
    ) => {
      state.MovieList = action.payload;
    },
  },
});

export default home.reducer;
