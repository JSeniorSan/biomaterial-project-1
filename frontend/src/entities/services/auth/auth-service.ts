import { AxiosResponse } from "axios";
import { LoginResponseType } from "./types";
import $api from "../../http";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<LoginResponseType>> {
    return $api.post<LoginResponseType>(
      "/auth/login",
      `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
    );
  }

  static logout(): Promise<void> {
    return $api.post("/auth/logout");
  }

  static refresh(
    refreshToken: string
  ): Promise<AxiosResponse<LoginResponseType>> {
    return $api.post("/auth/refresh", refreshToken);
  }
}
