"use client";
import React from "react";
import MenuItem from "../_ui/menu-item";
import { MenuListInterface } from "../model/types";

const MenuList = ({ menuList }: { menuList: MenuListInterface[] }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-3 justify-start items-start">
      {menuList.map((item) => {
        return <MenuItem id={item.id} key={item.name} title={item.title} />;
      })}
    </div>
  );
};

export default MenuList;
