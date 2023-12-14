import axios from "axios";
import { getToken } from "helpers/tokenStorage";
import Auth from "./Auth";
import Movies from "./Movies";

export default class Api {
  auth: Auth;
  movies: Movies;

  constructor() {
    this.auth = new Auth(this.request);
    this.movies = new Movies(this.request);
  }

  get request() {
    const instance = axios.create({ baseURL: "http://localhost:5000" });

    instance.interceptors.request.use((config) => {
      const token = getToken();
      if (token) {
        (config.headers as any).common["Authorization"] = `Bearer ${token}`;
      }

      return config;
    });

    return instance;
  }
}
