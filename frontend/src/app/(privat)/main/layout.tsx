import Header from "@/widgets/header/header";
import Menu from "@/widgets/menu/pub/menu";
import { ReactNode } from "react";
import styles from "./style.module.scss";
const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Menu />
      {children}
    </div>
  );
};

export default LayoutMain;
