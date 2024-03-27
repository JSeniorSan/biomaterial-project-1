import React from "react";
import { ModeToggle } from "@/features/theme/toggle-theme-item";
import ExitItem from "../_ui/exit-item";
import HeaderBurgerMenu from "../_ui/header-burger-menu";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[var(--header-bg-color)]  h-14 w-full p-2 px-5 backdrop-blur-sm col-start-1 col-end-8 fixed shadow-xl">
      <ExitItem />
      <HeaderBurgerMenu />
      <ModeToggle />
    </header>
  );
};

export default Header;
