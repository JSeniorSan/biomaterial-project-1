import $api from "@/entities/http";

export interface UserUnfoInterface {
  user_id: string;
  username: string;
  name: string;
  surname: string;
  role: string;
  is_active: boolean;
  is_verified: boolean;
  is_superuser: boolean;
}

export class UsersService {
  static async getCurrentUser() {
    return await $api.get<UserUnfoInterface>("/users/me");
  }
}
