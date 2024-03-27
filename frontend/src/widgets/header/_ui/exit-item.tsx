import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
const ExitItem = () => {
  return (
    <Link href="/" className={styles.exit}>
      Exit
    </Link>
  );
};

export default ExitItem;
