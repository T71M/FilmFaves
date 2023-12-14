import { Base } from "./Base";
import { CheckEmailBody, LoginForm, RegisterForm } from "./interfaces/auth";

export default class Auth extends Base {
  async login(values: LoginForm) {
    const response = await this.request.post(`/auth/login/`, values);
    return response.data;
  }

  async register(values: RegisterForm) {
    const response = await this.request.post(`/auth/register/`, values);
    return response.data;
  }

  async verify() {
    const response = await this.request.get("/auth/");
    return response.data;
  }

  async checkEmail(values: CheckEmailBody) {
    const response = await this.request.post("/auth/check-email", values);
    return response.data;
  }
}
