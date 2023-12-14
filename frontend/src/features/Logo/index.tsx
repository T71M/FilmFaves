import css from "../../styles/shared.module.css";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className={css["logo-container"]}>
      <img src={logo} alt="logo"></img>
      <div className={css["logo-text"]}>Mooviex</div>
    </div>
  );
}
