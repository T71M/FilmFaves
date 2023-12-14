const storage = window.localStorage;

const getToken = () => {
  return storage.getItem("token");
};

const setToken = (token: string) => {
  storage.setItem("token", token);
};

const removeToken = () => {
  storage.removeItem("token");
};

export { getToken, setToken, removeToken };
