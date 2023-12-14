import Logo from "features/Logo";
import css from "../../styles/movies.module.css";

export default function Footer() {
  return (
    <div className={css["footer-container"]}>
      <Logo />
      <div className={css["footer-text"]}>@2022, All right reserved</div>
    </div>
  );
}
