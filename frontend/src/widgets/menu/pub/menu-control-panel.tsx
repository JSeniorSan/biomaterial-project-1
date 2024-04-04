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
    <div className="flex flex-col gap-3 justify-center col-start-7 col-end-8">
      <b className="align-self-center  text-xl">Навигация:</b>
      <div
        onClick={() => handleClickNavigateTo("Теоретическая часть")}
        className="cursor-pointer hover:text-[var(--menu-text-color)] transition-all ease-in-out underline">
        Теоретическая часть
      </div>
      <div
        onClick={() => handleClickNavigateTo("Практическая часть")}
        className="cursor-pointer hover:text-[var(--menu-text-color)] transition-all ease-in-out underline">
        Практическая часть
      </div>
    </div>
  );
};

export default MenuControlPanel;
