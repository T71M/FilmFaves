import { useAuthWatcher } from "features/Auth/hooks/useAuthWatcher";
import RegistrationPage from "pages/auth/RegistrationPage";
import MoviesPage from "pages/movies/MoviesPage";
import { Route, Navigate, Routes } from "react-router-dom";
import LoginPage from "../../pages/auth/LoginPage";

export default function AppRouter() {
  const { user, canRender } = useAuthWatcher();

  if (!canRender) return null;

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
