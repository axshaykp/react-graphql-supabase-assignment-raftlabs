import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "../features/View/viewSlice";
import storyReducer from "../features/View/storySlice";

const store = configureStore({
  reducer: {
    view: viewReducer,
    story:storyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
