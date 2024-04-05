import React from "react";
import { ModeToggle } from "@/features/theme/toggle-theme-item";
import ExitItem from "../_ui/exit-item";
import HeaderBurgerMenu from "../_ui/header-burger-menu";
import HeaderDropNav from "../_ui/drop-nav";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[var(--header-bg-color)]  h-14 w-full p-2 px-5 backdrop-blur-sm col-start-1 col-end-8 fixed shadow-xl z-30">
      <ExitItem />
      <HeaderBurgerMenu />
      <div className="flex gap-10 justify-center items-center">
        <HeaderDropNav />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
