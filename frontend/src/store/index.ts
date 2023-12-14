import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Slices
import { authReducers, authActions } from "features/Auth/store";

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
  devTools: {
    actionCreators: {
      ...authActions,
    },
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
