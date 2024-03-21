import React from "react";
import { ModeToggle } from "@/features/theme/toggle-theme-item";
import ExitItem from "../_ui/exit-item";
import HeaderBurgerMenu from "../_ui/header-burger-menu";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#5E616A] dark:bg-[#283149] h-14 w-full p-2 px-5 top-0 bg-opacity-80 backdrop-blur-sm col-start-1 col-end-8 fixed shadow-xl border-b-2 dark:bg-opacity-80 dark:backdrop-blur-sm">
      <ExitItem />
      <HeaderBurgerMenu />
      <div className="flex gap-10 items-center">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
