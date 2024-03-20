"use client";
import { Input } from "@/shared/ui/input";
import React from "react";
import { menuData } from "../model/menu-data";
import MenuItem from "../_ui/menu-item";
import styles from "./style.module.scss";

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 bg-slate-50 rounded-full border border-[#5E616A]"></div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <div>Имя</div>
            <div>Фамилия</div>
          </div>
          <div>Группа</div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-start ">
        <label>Поиск по работам:</label>
        <Input
          type="search"
          placeholder="Название работы"
          className="rounded-2xl dark:bg-slate-700 font-light bg-transparent border-2 border-[#5E616A]"
        />
      </div>
      <div className="w-full h-fit flex flex-col gap-3 justify-start items-start ml-3">
        {menuData.map((item) => {
          return (
            <MenuItem
              name={item.name}
              secondInfo={item.secondLevel}
              title={item.title}
              key={item.name}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Menu;
