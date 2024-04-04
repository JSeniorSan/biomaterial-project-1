import React from "react";
import { menuData } from "../model/menu-data";
import MenuItem from "../_ui/menu-item";

const MenuList = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-3 justify-start items-start ">
      {menuData.map((item) => {
        return <MenuItem id={item.id} key={item.name} title={item.title} />;
      })}
    </div>
  );
};

export default MenuList;
