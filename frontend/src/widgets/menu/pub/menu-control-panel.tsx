"use client";

import React from "react";

const MenuControlPanel = () => {
  const handleClickNavigateTo = (name: string) => {
    document.getElementById(name)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  return (
    <div className="flex flex-col gap-3 justify-center">
      <b className="align-self-center ">Навигация по странице:</b>
      <div
        onClick={() => handleClickNavigateTo("Теоретическая часть")}
        className="cursor-pointer hover:text-[var(--menu-text-color)] transition-all ease-in-out ">
        Теоретическая часть
      </div>
      <div
        onClick={() => handleClickNavigateTo("Практическая часть")}
        className="cursor-pointer hover:text-[var(--menu-text-color)] transition-all ease-in-out">
        Практическая часть
      </div>
      <div>Выводы</div>
    </div>
  );
};

export default MenuControlPanel;
