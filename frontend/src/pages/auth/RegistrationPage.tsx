import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrimaryButton } from "features/Button";
import css from "../../styles/auth.module.css";
import inputCss from "../../styles/input.module.css";
import { RegisterForm } from "api/interfaces/auth";
import { api } from "App";
import useAuthStore from "features/Auth/hooks/useAuthStore";
import { setToken } from "helpers/tokenStorage";
import { useState } from "react";

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
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

export default function RegistrationPage() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(schema) });

  const [registrationError, setRegistrationError] = useState<string | null>();

  const { setUser } = useAuthStore();

  const handleRegistration = (values: RegisterForm) => {
    api.auth
      .register(values)
      .then((response) => {
        setUser(response.user.username);
        setToken(response.token);
      })
      .catch((err) => {
        setRegistrationError(err.response.data.message);
        console.error(err);
      });
  };

  const handleEmailChange = (email: string) => {
    const body = { email };
    api.auth
      .checkEmail(body)
      .then((response) => {
        if (response.found === true) {
          setError("email", {
            message: "The user with this email already exists",
          });
        }
        if (response.found === false) {
          clearErrors("email");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={css["auth-page-container"]}>
      <div className={css["auth-page-bg-gradient"]}></div>
      <div className={css["auth-container"]}>
        <div className={css["welcome-text"]}>Welcome to Mooviex</div>
        <div className={css["auth-title"]}>Sign up</div>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div>
            <div className={inputCss["input-label"]}>Name</div>
            <input
              className={inputCss.input}
              placeholder="Enter name"
              {...register("username")}
            />
            <span style={{ color: "#ed4337" }}>
              {" "}
              <>{errors.username?.message}</>
            </span>
          </div>
          <div>
            <div className={inputCss["input-label"]}>E-mail</div>
            <input
              className={inputCss.input}
              placeholder="Enter email"
              {...register("email")}
              onChange={(e) => handleEmailChange(e.target.value)}
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
            <PrimaryButton text={"Sign up"} color={"#CA1040"} submit />
          </div>
          {registrationError && (
            <span style={{ color: "#ed4337" }}>
              {" "}
              <>{registrationError}</>
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
