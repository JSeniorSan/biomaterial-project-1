import React from "react";
import { ModeToggle } from "@/features/theme/toggle-theme-item";
import { Menu } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#5E616A] dark:bg-[#283149] h-20 w-full p-5 top-0 bg-opacity-80 backdrop-blur-sm col-start-1 col-end-8 fixed shadow-xl border-b-2 dark:bg-opacity-80 dark:backdrop-blur-sm">
      <Menu className="md:hidden" size={50} />
      <Link href="/">
        <h1 className=" md:flex md:justify-center md:items-center text-xl font-bold hidden hover:bg-slate-400 p-2 rounded-lg transition-all ease-in-out hover:animate-pulse">
          Exit
        </h1>
      </Link>
      <div className="flex gap-10 items-center">
        {/* <div className="text-xl cursor-pointer hover:underline">Объявления</div>
        <div className="text-xl cursor-pointer hover:underline">Тесты</div>
        <div className="text-xl cursor-pointer hover:underline">Памятка</div>
        <div className="text-xl cursor-pointer hover:underline">Мои работы</div> */}

        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
