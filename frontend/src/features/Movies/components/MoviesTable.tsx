import { useEffect, useState } from "react";
import css from "../../../styles/movies.module.css";
import inputCss from "../../../styles/input.module.css";
import { Movie } from "api/interfaces/movie";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import {
  compByCountry,
  compByRating,
  compByScore,
  compByTitle,
  compByType,
  compByYear,
  getType,
} from "../helpers";

interface IMoviesTableProps {
  movies: Movie[];
}

export default function MoviesTable({ movies }: IMoviesTableProps) {
  const pageLimit = 12;
  const [moviesToRender, setMoviesToRender] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setMoviesToRender(movies);
  }, [movies]);

  const handleLeftArrowClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (page < Math.ceil(movies.length / pageLimit)) {
      setPage(page + 1);
    }
  };

  const getPaginationSize = (): number => {
    if (moviesToRender.length === 0) return 1;
    return Math.ceil(moviesToRender.length / pageLimit);
  };

  const handleSearchChange = (value: string) => {
    setMoviesToRender(
      movies.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    );
    setPage(1);
  };

  const sortByValue = (value: string) => {
    const sortedMovies = [...moviesToRender];
    if (value === "title") {
      sortedMovies.sort(compByTitle);
    } else if (value === "type") {
      sortedMovies.sort(compByType);
    } else if (value === "year") {
      sortedMovies.sort(compByYear);
    } else if (value === "rating") {
      sortedMovies.sort(compByRating);
    } else if (value === "score") {
      sortedMovies.sort(compByScore);
    } else if (value === "country") {
      sortedMovies.sort(compByCountry);
    }
    setMoviesToRender(sortedMovies);
  };

  const renderMovies = () => {
    return moviesToRender
      .slice((page - 1) * pageLimit, page * pageLimit)
      .map((movie: Movie) => (
        <tr key={movie.id}>
          <td>{movie.title}</td>
          <td>{getType(movie.type)}</td>
          <td>{movie.year}</td>
          <td>{movie.rating}</td>
          <td>{movie.score}</td>
          <td>{movie.country}</td>
        </tr>
      ));
  };

  return (
    <div>
      <div className={css["table-actions-wrapper"]}>
        <div className={css["pagination-arrows-wrapper"]}>
          <div className={css["pagination-arrows-container"]}>
            <img
              onClick={() => handleLeftArrowClick()}
              width={60}
              height={60}
              src={arrowLeft}
              alt="arrow"
            ></img>
            Page {page} out of {getPaginationSize()}
            <img
              onClick={() => handleRightArrowClick()}
              width={60}
              height={60}
              src={arrowRight}
              alt="arrow"
            ></img>
          </div>
        </div>
        <div className={css["search-input-container"]}>
          <div>Search:</div>

          <input
            className={inputCss["input"]}
            style={{ fontSize: "24px" }}
            placeholder={"Enter value to search by name"}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </div>
      <table className={css["movies-table"]}>
        <thead>
          <tr>
            <th onClick={() => sortByValue("title")} style={{ width: "48%" }}>
              Title
            </th>
            <th onClick={() => sortByValue("type")} style={{ width: "10%" }}>
              Type
            </th>
            <th onClick={() => sortByValue("year")} style={{ width: "8%" }}>
              Year
            </th>
            <th onClick={() => sortByValue("rating")} style={{ width: "10%" }}>
              Rating
            </th>
            <th onClick={() => sortByValue("score")} style={{ width: "10%" }}>
              Score
            </th>
            <th onClick={() => sortByValue("country")} style={{ width: "14%" }}>
              Country
            </th>
          </tr>
        </thead>
        <tbody>{renderMovies()}</tbody>
      </table>
    </div>
  );
}
