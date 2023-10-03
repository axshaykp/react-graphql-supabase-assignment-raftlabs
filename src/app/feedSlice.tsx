import { createSlice } from "@reduxjs/toolkit";

type ActiveTabs = "home" | "profile" | "settings";

interface FeedState {
  value: ActiveTabs;
}

const initialState: FeedState = {
  value: "home",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setHome: (state) => {
      state.value = "home";
    },
    setProfile: (state) => {
      state.value = "profile";
    },
    setSettings: (state) => {
      state.value = "settings";
    },
  },
});

export const { setHome, setProfile, setSettings } = feedSlice.actions;

export default feedSlice.reducer;
