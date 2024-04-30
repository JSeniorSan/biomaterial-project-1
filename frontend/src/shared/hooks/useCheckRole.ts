import $api from "@/entities/http";
import { UserUnfoInterface } from "@/entities/services/labs/users-service";
import { useEffect, useState } from "react";

export type Role = "student" | "teacher";

export interface RoleInterface {
  role: Role | undefined;
}

export const useCheckRole = (): RoleInterface => {
  const [role, setRole] = useState<Role>();

  useEffect(() => {
    const getUserInfo = async (): Promise<void> => {
      try {
        const response = await $api.get<UserUnfoInterface>("/users/me");
        const data = response.data;
        console.log("me response", response);
        setRole(data.role === "teacher" ? "teacher" : "student");
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  if (role) {
  }

  return { role };
};
