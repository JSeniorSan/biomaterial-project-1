"use client";
import { RootState } from "@/entities/store";
import { checkIsAuth } from "@/entities/store/auth/auth-thunk";
import Login from "@/features/auth/pub/login";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux-hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function HomePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuth } = useAppSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const refreshToken = localStorage.getItem("refreshToken");
      console.log(refreshToken);
      refreshToken && dispatch(checkIsAuth(refreshToken));
    }
  }, []);

  if (isAuth) {
    router.push("/lab_1");
  }

  return (
    <section className="flex flex-col py-10 px-7 gap-8 justify-around items-center h-screen md:justify-start md:gap-40 md:p-0 ">
      <h1 className="block text-center text-3xl font-extrabold md:bg-[var(--header-bg-color)] md:w-full  md:p-5 md:text-[var(--text-header)] ">
        Лабораторные кафедры биоматериалов
      </h1>
      {!isAuth && "Вы не авторизованы"}
      {isAuth && "Вы авторизованы"}
      <Login />
      {/* <Link href="/lab_1" className="text-white p-4 rounded-lg bg-rose-400 ">
        Перейти на главную
      </Link> */}
    </section>
  );
}
