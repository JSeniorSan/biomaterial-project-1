"use client";
import React, { useState } from "react";
import DashboardList from "../ui/dasboard-list";
import DashboardTitle from "../ui/dashboard-header";

import DashboardInfo from "../ui/dashboard-info";

const DashboardPage = () => {
  const [getWork, setGetWork] = useState<string>("");
  const [mark, setMark] = useState<string>("");

  return (
    <section className="w-full min-h-screen p-5 flex flex-col gap-5">
      <DashboardTitle />
      <h2>Таблица сданных работ:</h2>
      <div className=" overflow-x-auto">
        <DashboardList setGetWork={setGetWork} />
      </div>
      <div className="flex gap-5">
        {getWork && (
          <DashboardInfo
            lab_name=""
            mark={mark}
            setGetWork={setGetWork}
            setMark={setMark}
            user_id=""
          />
        )}
      </div>
    </section>
  );
};
export default DashboardPage;
