"use client";
import React from "react";
import { Button } from "antd";
import AuthService from "@/entities/services/auth/auth-service";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/shared/lib/hooks/redux-hooks";
import { isAuth } from "@/entities/store/auth/authSlice";
const ExitItem = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    try {
      await AuthService.logout();
      dispatch(isAuth(false));
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      router.push("/");
    } catch (error) {
      console.log();
    }
  };
  return <Button onClick={handleClick}>Exit</Button>;
};

export default ExitItem;
