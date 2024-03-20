import { X } from "lucide-react";
import styles from "./style.module.scss";
import React from "react";
import Link from "next/link";

type MenuContentType = (value: boolean) => void;

const MenuContent = ({ setMenuState }: { setMenuState: MenuContentType }) => {
  const handleCloseMenu = () => {
    setMenuState(false);
  };
  return (
    <aside className={styles.menuContent}>
      <X onClick={handleCloseMenu} />
      <div className="flex flex-col gap-2 text-lg pl-5 font-medium">
        <Link href={"/"}>Exit</Link>
        <label className="font-bold border-t-2 border-black pt-2">
          Навигация:
        </label>
        <div>Пока пусто</div>
      </div>
    </aside>
  );
};

export default MenuContent;
