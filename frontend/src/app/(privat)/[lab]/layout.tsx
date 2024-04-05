import Header from "@/widgets/header/pub/header";
import { ReactNode } from "react";
import styles from "./style.module.scss";
import AppMenu from "@/widgets/menu/pub/app-menu";
const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <AppMenu />
      {children}
    </div>
  );
};

export default LayoutMain;
