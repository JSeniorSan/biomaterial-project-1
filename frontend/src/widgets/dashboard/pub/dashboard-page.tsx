import React from "react";
import DashboardList from "../ui/dasboard-list";
import DashboardTitle from "../ui/dashboard-header";

import Table_2 from "@/widgets/main/_ui/table_1/_table-1";

const DashboardPage = () => {
  return (
    <section className="w-full h-screen p-5 flex flex-col gap-5">
      <DashboardTitle />
      <h2>Таблица сданных работ:</h2>
      <div className=" overflow-x-auto">
        <DashboardList />
      </div>
      <div>
        Результаты:
        <Table_2 type="view" />
      </div>
    </section>
  );
};
export default DashboardPage;
