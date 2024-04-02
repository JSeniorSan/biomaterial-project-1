"use client";
import React from "react";
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
const MainLab = () => {
  const pathname = usePathname();
  const path = Number(pathname.split("/")[1]);
  console.log(path);
  return (
    <section className={styles.lab}>
      <HeadContent
        chema={LAB_TITLE[path - 1].pic}
        page_title={LAB_TITLE[path - 1].name}
      />
      <TheoryContent theoryData={THEORY_PAGE_DATA[path - 1]} />
      <PracticeContent title={PRACTICE_PAGE_DATA[path - 1]?.title} />
    </section>
  );
};

export default MainLab;
