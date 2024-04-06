import Header from "@/widgets/header/pub/header";
import { ReactNode } from "react";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";
import { Spin } from "antd";

const DynamicAppMenu = dynamic(() => import("@/widgets/menu/pub/app-menu"), {
  loading: () => <Spin />,
});

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <DynamicAppMenu />
      {children}
    </div>
  );
};

export default LayoutMain;
