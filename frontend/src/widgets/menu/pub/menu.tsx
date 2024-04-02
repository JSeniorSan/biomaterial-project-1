"use client";

import React from "react";
import styles from "./style.module.scss";
import MenuUserPanel from "./menu-user-panel";
import MenuSearch from "./menu-search";
import MenuList from "./menu-list";
import MenuControlPanel from "./menu-control-panel";

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <MenuUserPanel />
      <MenuSearch />
      <MenuList />
      <MenuControlPanel />
    </aside>
  );
};

export default Menu;
