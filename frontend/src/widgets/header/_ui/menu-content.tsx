"use client";
import { X } from "lucide-react";
import styles from "./style.module.scss";
import React from "react";
import Link from "next/link";
import Menu from "@/widgets/menu/pub/menu";

type MenuContentType = (value: boolean) => void;

const MenuContent = ({ setMenuState }: { setMenuState: MenuContentType }) => {
  const handleCloseMenu = () => {
    setMenuState(false);
  };
  return (
    <section className={styles.menuContent}>
      <X onClick={handleCloseMenu} className={styles.closeMenu} />
      <div className={styles.menuSections}>
        <Link href={"/"} className={styles.backMain}>
          Выйти на главную
        </Link>
        <Menu />
      </div>
    </section>
  );
};

export default MenuContent;
