"use client";
import React from "react";
import DashboardTitle from "../ui/dashboard-header";
import DashboardStudent from "../ui/dashboard-student";
import { useCheckRole } from "@/shared/hooks/useCheckRole";
import DashboardTeacher from "../ui/dashboard-teacher";

const DashboardPage = () => {
  const { role } = useCheckRole();
  console.log(role);

  return (
    <section className="w-full min-h-screen p-5 flex flex-col gap-5">
      <DashboardTitle title={role} />
      <h2>Таблица сданных работ:</h2>
      {role === "student" && <DashboardStudent />}
      {role === "teacher" && <DashboardTeacher />}
    </section>
  );
};
export default DashboardPage;
