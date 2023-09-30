import { createSlice } from "@reduxjs/toolkit";

interface StoryState {
  value: boolean;
}

const initialState: StoryState = {
  value: false,
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    toggleStory: (state) => {
      state.value = state.value ? false : true;
    },
  },
});

export const { toggleStory } = storySlice.actions;

export default storySlice.reducer;
