import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
