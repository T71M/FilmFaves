import { api } from "App";
import { getToken } from "helpers/tokenStorage";
import { useEffect, useState } from "react";
import useAuthStore from "./useAuthStore";

export const useAuthWatcher = () => {
  const { user, setUser } = useAuthStore();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setCanRender(true);
      return;
    }
    api.auth
      .verify()
      .then((response) => {
        setUser(response.username);
      })
      .catch((err) => console.error(err))
      .finally(() => setCanRender(true));
  }, [setCanRender]);

  return {
    canRender,
    user,
  };
};
