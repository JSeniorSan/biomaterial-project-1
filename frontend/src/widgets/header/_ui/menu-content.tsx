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
      <X onClick={handleCloseMenu} />
      <div className="flex flex-col gap-2 text-lg pl-5 font-medium">
        <Link href={"/"}>Exit</Link>
        <Menu />
      </div>
    </section>
  );
};

export default MenuContent;
