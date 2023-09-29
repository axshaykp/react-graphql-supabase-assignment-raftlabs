import { createSlice } from "@reduxjs/toolkit";

interface ViewState {
  value: "feed" | "profile" | "create";
}

const initialState: ViewState = {
  value: "feed",
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    showFeed: (state) => {
      state.value = "feed";
    },
    showProfile: (state) => {
      state.value = "profile";
    },
    showCreate: (state) => {
      state.value = "create";
    },
  },
});

export const { showFeed, showProfile, showCreate } = viewSlice.actions;

export default viewSlice.reducer;
