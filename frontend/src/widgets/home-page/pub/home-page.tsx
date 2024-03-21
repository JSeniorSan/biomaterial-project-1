import Login from "@/features/auth/pub/login";
import Link from "next/link";
export default function HomePage() {
  return (
    <section className="flex flex-col py-10 px-7 gap-8 justify-around items-center h-screen md:justify-start md:gap-40 md:p-0 ">
      <h1 className="block text-center text-3xl font-extrabold md:bg-[#756C83] dark:md:bg-[#283149] md:w-full  md:p-5 md:text-white ">
        Лабораторные кафедры биоматериалов
      </h1>

      <Login />
      <Link href="/Lab1" className="text-red-600">
        Перейти на главную
      </Link>
    </section>
  );
}
