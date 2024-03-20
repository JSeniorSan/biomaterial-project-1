import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
const ExitItem = () => {
  return (
    <Link href="/" className={styles.exit}>
      <h1 className=" text-xl font-bold hover:bg-slate-400 p-2 rounded-lg transition-all ease-in-out hover:animate-pulse">
        Exit
      </h1>
    </Link>
  );
};

export default ExitItem;
