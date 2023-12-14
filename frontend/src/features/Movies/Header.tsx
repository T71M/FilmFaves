import css from "../../styles/movies.module.css";
import Logo from "features/Logo";
import useAuthStore from "features/Auth/hooks/useAuthStore";
import userIcon from "../../assets/icons/user.svg";
import logOutIcon from "../../assets/icons/logout.svg";
import { removeToken } from "../../helpers/tokenStorage";

export default function Header() {
  const { user } = useAuthStore();

  const handleFilmsClick = () => {
    document.getElementById("films")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleTVSeriesClick = () => {
    document.getElementById("tvseries")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleCartoonsClick = () => {
    document.getElementById("cartoons")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogOutClick = () => {
    removeToken();
    window.location.reload();
  };

  return (
    <div className={css["header-container"]}>
      <Logo />
      <div className={css["header-buttons-container"]}>
        <button
          className={css["header-button"]}
          onClick={() => handleFilmsClick()}
        >
          Films
        </button>
        <button
          className={css["header-button"]}
          onClick={() => handleTVSeriesClick()}
        >
          TV Series
        </button>
        <button
          className={css["header-button"]}
          onClick={() => handleCartoonsClick()}
        >
          Cartoons
        </button>
      </div>
      <div className={css["header-icons-container"]}>
        <div className={css["username-container"]}>
          <img width={36} height={36} src={userIcon} alt="user"></img>
          <div className={css["header-username"]}>{user}</div>
        </div>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => handleLogOutClick()}
          width={30}
          height={30}
          src={logOutIcon}
          alt="logout"
          color={"white"}
        ></img>
      </div>
    </div>
  );
}
