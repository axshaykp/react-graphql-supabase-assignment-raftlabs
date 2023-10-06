import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: string | undefined;
  avatar: string | undefined;
  name: string | undefined;
}

const initialState: AuthState = {
  email: undefined,
  avatar: undefined,
  name: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setEmail, setAvatar, setName } = authSlice.actions;

export default authSlice.reducer;
