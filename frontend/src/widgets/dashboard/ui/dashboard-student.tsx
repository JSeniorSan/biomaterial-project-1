"use client";
import { Table } from "antd";
import React from "react";
import Column from "antd/es/table/Column";
import { useStudentData } from "@/shared/hooks/useStudentData";

const DashboardStudent = () => {
  const { info } = useStudentData();
  return (
    <Table dataSource={info} pagination={false} bordered>
      <Column dataIndex="name" title={"Работа"} key={"name"} />
      <Column title={"Статус"} dataIndex={"status_or_mark"} key="name" />
    </Table>
  );
};

export default DashboardStudent;
