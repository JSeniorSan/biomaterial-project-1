"use client";
import { menuData } from "../model/menu-data";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./style.module.scss";
import MenuSearch from "./menu-search";
import MenuList from "./menu-list";
import MenuControlPanel from "./menu-control-panel";
import { MenuListInterface } from "../model/types";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const [query, setQuery] = useState<string>("");
  const [menuList, setMenuList] = useState<MenuListInterface[]>();

  useEffect(() => {
    setMenuList(menuData);
  }, []);

  const filterValue = useMemo(() => {
    if (!query) return menuData;
    return menuList?.filter((item) => item.title.includes(query));
  }, [query, menuList]);
  console.log(filterValue);
  return (
    <AnimatePresence>
      <motion.aside
        className={styles.menu}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}>
        <MenuControlPanel />
        <MenuSearch setQuery={setQuery} query={query} />

        {filterValue && <MenuList menuList={filterValue} />}
      </motion.aside>
    </AnimatePresence>
  );
};

export default Menu;
