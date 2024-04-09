"use client";
import { menuData } from "../model/menu-data";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./style.module.scss";
import MenuSearch from "./menu-search";
import { AnimatePresence, motion } from "framer-motion";
import { List, Typography } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const AppMenu = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState<string>("");
  const [menuList, setMenuList] = useState<string[]>([]);
  const { Title } = Typography;

  useEffect(() => {
    const list = menuData.map((item) => {
      return item.title;
    });
    setMenuList(list);
  }, []);

  const filterValue = useMemo(() => {
    if (!query) return menuData.map((item) => item.title);
    return menuList?.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, menuList]);

  return (
    <AnimatePresence>
      <motion.aside
        className={styles.menu}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}>
        <MenuSearch setQuery={setQuery} query={query} />
        <List
          size="small"
          header={
            <Title level={4} className="dark:text-white">
              Список работ
            </Title>
          }
          bordered
          dataSource={filterValue}
          renderItem={(item, i) => (
            <List.Item
              className={clsx(
                "hover:bg-[var(--active-state-menu-color)] last:rounded-b-lg transition-all ease-in-out cursor-pointer dark:text-white",
                {
                  ["bg-[var(--active-state-menu-color)] text-white"]:
                    Number(pathname.at(-1)) === i + 1,
                }
              )}>
              <Link href={"/lab_" + (i + 1)} className="hover:text-black">
                {item}
              </Link>
            </List.Item>
          )}
        />
      </motion.aside>
    </AnimatePresence>
  );
};

export default AppMenu;
