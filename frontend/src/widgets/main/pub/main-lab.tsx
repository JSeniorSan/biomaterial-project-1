"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import HeadContent from "../_ui/head-content";
import TheoryContent from "../_ui/theory-content";
import {
  LAB_TITLE,
  PRACTICE_PAGE_DATA,
  THEORY_PAGE_DATA,
} from "../model/page-data";
import PracticeContent from "../_ui/practice-content";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Divider } from "antd";
const MainLab = () => {
  const pathname = usePathname();
  const [path, setPath] = useState<number>(0);

  useEffect(() => {
    function getCurrentUrl(path: string) {
      const currentPath = Number(path.split("/")[1]);
      setPath(currentPath);
    }

    getCurrentUrl(pathname);
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.section
        className={styles.lab}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}>
        <HeadContent
          chema={LAB_TITLE[path - 1]?.pic}
          page_title={LAB_TITLE[path - 1]?.name}
        />
        <TheoryContent theoryData={THEORY_PAGE_DATA[path - 1]} />
        <Divider className="dark:bg-white" />
        <PracticeContent title={PRACTICE_PAGE_DATA[path - 1]?.title} />
      </motion.section>
    </AnimatePresence>
  );
};

export default MainLab;
