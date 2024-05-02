import { Role } from "@/shared/hooks/useCheckRole";
import React from "react";

const DashboardTitle = ({ title }: { title: Role | undefined }) => {
  return <h1 className="text-4xl font-semibold dark:text-white ">{title}</h1>;
};

export default DashboardTitle;
