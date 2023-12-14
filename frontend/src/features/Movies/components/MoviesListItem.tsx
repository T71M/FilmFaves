import css from "../../../styles/movies.module.css";
import { Movie } from "api/interfaces/movie";

export interface IMoviesListItemProps {
  movie: Movie;
}

export default function MoviesListItem({ movie }: IMoviesListItemProps) {
  return (
    <div className={css["movies-list-item-container"]}>
      <img
        src={"../movies/" + movie.image}
        width={263}
        height={349}
        alt=""
      ></img>
      <div className={css["movies-list-item-title"]}>{movie.title}</div>
      <div className={css["movies-list-item-subtitle"]}>
        {movie.year}, {movie.country}
      </div>
    </div>
  );
}
