import Login from "@/features/auth/pub/login";
import Link from "next/link";
export default function HomePage() {
  return (
    <section className="flex flex-col py-10 px-7 gap-8 justify-around items-center h-screen md:justify-start md:gap-40 md:p-0 ">
      <h1 className="block text-center text-3xl font-extrabold md:bg-[var(--header-bg-color)] md:w-full  md:p-5 md:text-[var(--text-header)] ">
        Лабораторные кафедры биоматериалов
      </h1>

      <Login />
      <Link href="/lab_1" className="text-white p-4 rounded-lg bg-rose-400 ">
        Перейти на главную
      </Link>
    </section>
  );
}
