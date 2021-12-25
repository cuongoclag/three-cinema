import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import homeReducer from "../features/Home/homeSlice";
import loginReducer from "../features/Login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
