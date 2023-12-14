import { useAppDispatch, useAppSelector } from "store";
import { useCallback } from "react";
import { authActions } from "../store";

export default function useAuthStore() {
  const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const setUser = useCallback(
    (user: string | null) => {
      dispatch(authActions.setUser(user));
    },
    [dispatch]
  );

  return {
    ...state,
    setUser,
  };
}
