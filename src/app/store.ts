import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "../features/View/viewSlice";

const store = configureStore({
  reducer: {
    counter: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
