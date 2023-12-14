import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "features/Button";
import css from "../../styles/auth.module.css";
import inputCss from "../../styles/input.module.css";
import { LoginForm } from "api/interfaces/auth";
import { api } from "App";
import useAuthStore from "features/Auth/hooks/useAuthStore";
import { setToken } from "helpers/tokenStorage";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password must be at least 6 charachers long")
      .max(20, "Password must be 20 charachers long at most"),
  })
  .required();

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [authError, setAuthError] = useState<boolean>(false);

  const handleLogin = (values: LoginForm) => {
    api.auth
      .login(values)
      .then((response) => {
        setUser(response.username);
        setToken(response.token);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.data.statusCode === 401) {
          setAuthError(true);
        }
      });
  };
  return (
    <div className={css["auth-page-container"]}>
      <div className={css["auth-page-bg-gradient"]}></div>
      <div className={css["auth-container"]}>
        <div className={css["welcome-text"]}>Welcome to Mooviex</div>
        <div className={css["auth-title"]}>Sign in</div>
        <div className={css["auth-subtitle"]}>
          Log in to select the best movie
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <div className={inputCss["input-label"]}>E-mail</div>
            <input
              className={inputCss.input}
              placeholder="Enter email"
              {...register("email")}
            />
            <span style={{ color: "#ed4337" }}>
              {" "}
              <>{errors.email?.message}</>
            </span>
          </div>
          <div>
            <div className={inputCss["input-label"]}>Password</div>
            <input
              className={inputCss.input}
              placeholder="Enter password"
              type="password"
              {...register("password")}
            />
            <span style={{ color: "#ed4337" }}>
              {" "}
              <>{errors.password?.message}</>
            </span>
          </div>
          <div className={css["button-wrapper"]}>
            <PrimaryButton text={"Sign in"} color={"#CA1040"} submit />
          </div>
          {authError && (
            <span style={{ color: "#ed4337" }}>
              {" "}
              <>{"Your login credentials are incorrect"}</>
            </span>
          )}
        </form>

        <div className={css["signup-offer-text"]}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className={css["signup-link"]}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
