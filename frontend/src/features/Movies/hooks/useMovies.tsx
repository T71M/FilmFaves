import { Movie } from "api/interfaces/movie";
import { api } from "App";
import { useState, useEffect } from "react";

export const useMovies = () => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await api.movies.getAllMovies();
      setStatus(response.status);
      setStatusText(response.statusText);
      setMovies(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { status, statusText, movies, error, loading, setMovies };
};
