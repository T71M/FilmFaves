import { PrimaryButton } from "features/Button";
import css from "../../styles/movies.module.css";
import MoviesList from "./components/MoviesList";
import { useMovies } from "./hooks/useMovies";
import loader from "../../assets/loader.svg";
import MoviesTable from "./components/MoviesTable";

export default function Content() {
  const { movies, loading } = useMovies();

  const handleProceedClick = () => {
    document.getElementById("films")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!movies || loading) {
    return (
      <div className={css["content-top"]}>
        <img width={300} height={300} src={loader} alt=""></img>
      </div>
    );
  }

  return (
    <div className={css["content-container"]}>
      <div className={css["content-top"]}>
        <div className={"welcome-text-container"}>
          <div>Welcome</div>
          <div onClick={() => handleProceedClick()}>
            <PrimaryButton
              text={"Proceed"}
              color={"#CA1040"}
              fontSize={"24px"}
            />
          </div>
        </div>
      </div>
      <div className={css["list-wrapper"]}>
        <MoviesList
          title={"Films"}
          id="films"
          movies={movies.filter((movie) => movie.type === "1")}
        />
        <MoviesList
          title={"TV Series"}
          id="tvseries"
          movies={movies.filter((movie) => movie.type === "2")}
        />
        <MoviesList
          title={"Cartoons"}
          id="cartoons"
          movies={movies.filter((movie) => movie.type === "3")}
        />
      </div>
      <div className={css["movies-table-wrapper"]}>
        <div className={css["movies-table-title"]}>
          The complete list of movies
        </div>
        <MoviesTable movies={movies} />
      </div>
    </div>
  );
}
