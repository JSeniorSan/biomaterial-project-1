"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import MenuContent from "./menu-content";

const HeaderBurgerMenu = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuState]);

  const handleClickMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <div className="relative text-[var(--text-header)]">
      <Menu className="md:hidden" size={40} onClick={handleClickMenu} />
      {menuState && <MenuContent setMenuState={setMenuState} />}
    </div>
  );
};

export default HeaderBurgerMenu;
