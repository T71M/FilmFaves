import css from "../../styles/movies.module.css";
import Header from "features/Movies/Header";
import Content from "features/Movies/Content";
import Footer from "features/Movies/Footer";

export default function MoviesPage() {
  return (
    <div className={css["movies-container"]}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
