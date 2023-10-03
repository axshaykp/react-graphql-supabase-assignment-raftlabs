import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string | undefined;
}

const initialState: AuthState = {
  email: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string | undefined>) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = authSlice.actions;

export default authSlice.reducer;
