"use client";

import React from "react";
import styles from "./style.module.scss";
import MenuSearch from "./menu-search";
import MenuList from "./menu-list";
import MenuControlPanel from "./menu-control-panel";

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <MenuControlPanel />
      <MenuSearch />
      <MenuList />
    </aside>
  );
};

export default Menu;
