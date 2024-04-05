"use client";
import { Button, Dropdown, MenuProps } from "antd";
import React from "react";

const handleClickNavigateTo = (name: string) => {
  document.getElementById(name)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div
        onClick={(e) => handleClickNavigateTo(e.currentTarget.innerText)}
        rel="noopener noreferrer">
        Теоретическая часть
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div
        onClick={(e) => handleClickNavigateTo(e.currentTarget.innerText)}
        rel="noopener noreferrer">
        Практическая часть
      </div>
    ),
  },
];

const HeaderDropNav = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      arrow={{ pointAtCenter: true }}>
      <Button type="default" className="text-base">
        Навигация
      </Button>
    </Dropdown>
  );
};

export default HeaderDropNav;
