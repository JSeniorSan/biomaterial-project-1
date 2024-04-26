"use client";
import React, { useEffect, useState } from "react";
import $api from "@/entities/http";
import Dashboard from "./page";
import Admin from "@/widgets/dashboard/pub/dashboard-admin";

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

const DashboardLayout = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const getUSerInfo = async () => {
      try {
        const response = await $api.get<UserUnfoInterface>("/users/me");
        const data = response.data;
        console.log(response);
        setIsAdmin(data.is_superuser);
      } catch (error) {
        console.log(error);
      }
    };
    getUSerInfo();
  }, []);

  return isAdmin ? <Admin /> : <Dashboard />;
};

export default DashboardLayout;
