import React from "react";
import { ModeToggle } from "@/features/theme/toggle-theme-item";
import { Menu } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#756C83] dark:bg-[#283149] h-20 w-full p-5 top-0 bg-opacity-80 backdrop-blur-sm col-start-1 col-end-8 fixed">
      <Menu className="md:hidden" size={50} />
      <Link href="/">
        <h1 className=" md:flex md:justify-center md:items-center text-xl font-bold hidden  text-white hover:bg-slate-400 p-2 rounded-lg transition-all ease-in-out hover:animate-pulse">
          Exit
        </h1>
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Header;
