import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
export interface AuthState {
  user: string | null;
}

// Initial State
const initialState: AuthState = {
  user: null,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
    },
  },
});

export const authReducers = authSlice.reducer;
export const authActions = authSlice.actions;
