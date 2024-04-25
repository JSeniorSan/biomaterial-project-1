import React from "react";
import DashboardList from "../ui/dasboard-list";
import { Input } from "antd";
import DashboardTitle from "../ui/dashboard-header";

const DashboardPage = () => {
  return (
    <section className="w-full h-screen p-5 flex flex-col gap-5">
      <DashboardTitle />

      <h2>Таблица сданных работ:</h2>
      <div className=" overflow-x-scroll">
        <DashboardList />
      </div>
    </section>
  );
};
export default DashboardPage;
