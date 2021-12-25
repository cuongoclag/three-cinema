import { loginAPI } from "./api/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetStateAction } from "react";

interface loginProps {
  taiKhoan: String;
  matKhau: String;
}

const initialState = {
  profile: JSON.parse(localStorage.getItem("user") as string) || {},
};

export const getUserLogin = createAsyncThunk(
  "User-list",
  async (data: loginProps, thunkAPI) => {
    try {
      const res = await loginAPI(data);
      console.log("DATA", res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface TokenProps {
  content: {
    accessToken: string;
  };
}

const handleLogin = (
  state: SetStateAction<any>,
  action: PayloadAction<TokenProps>
) => {
  const { accessToken } = action.payload.content;
  console.log("action", action.payload);
  localStorage.setItem("accessToken", accessToken);
};

const login = createSlice({
  initialState,
  name: "Login",
  reducers: {},
  extraReducers: {
    [getUserLogin.fulfilled.type]: handleLogin,
  },
});

const loginReducer = login.reducer;
export default loginReducer;
