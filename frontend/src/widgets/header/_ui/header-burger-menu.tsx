"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import MenuContent from "./menu-content";

const HeaderBurgerMenu = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleClickMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <div className="relative ">
      <Menu className="md:hidden" size={40} onClick={handleClickMenu} />
      {menuState && <MenuContent setMenuState={setMenuState} />}
    </div>
  );
};

export default HeaderBurgerMenu;
