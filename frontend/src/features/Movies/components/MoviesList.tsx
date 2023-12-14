import { Movie } from "api/interfaces/movie";
import css from "../../../styles/movies.module.css";
import MoviesListItem from "./MoviesListItem";

interface IMoviesListProps {
  title: string;
  id: string;
  movies: Movie[];
}

export default function MoviesList({ title, id, movies }: IMoviesListProps) {
  return (
    <div className={css["movies-list-wrapper"]} id={id}>
      <div className={css["content-title"]}>{title}</div>
      <div className={css["movies-list-container"]}>
        {movies.map((movie) => (
          <MoviesListItem movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
