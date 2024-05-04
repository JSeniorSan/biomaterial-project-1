"use client";
import React, { useState } from "react";
import DashboardInfo from "./dashboard-info";
import DashboardList from "./dasboard-list";

const DashboardTeacher = () => {
  const [getWork, setGetWork] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <>
      <DashboardList setGetWork={setGetWork} setName={setName} />
      <div className="flex gap-5">
        {getWork && (
          <DashboardInfo
            lab_name={name}
            setGetWork={setGetWork}
            user_id={getWork}
          />
        )}
      </div>
    </>
  );
};

export default DashboardTeacher;
