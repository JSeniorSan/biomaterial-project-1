"use client";
import { RootState } from "@/entities/store";
import { checkIsAuth } from "@/entities/store/auth/auth-thunk";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux-hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const checkAuthHoc = (Component: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const { isAuth } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (localStorage.getItem("token")) {
        dispatch(checkIsAuth(localStorage.getItem("refreshToken")!));
        console.log("inside if");
      }
    }, []);

    if (isAuth) {
      console.log("render component");
      return <Component {...props} />;
    } else {
      console.log("redirect");
      router.push("/");
    }
  };
};
