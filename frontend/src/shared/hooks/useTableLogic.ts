"use client";
import React, { useEffect, useState } from "react";
import { RootTableData, TEditCellProps } from "@/widgets/main/model/types";
import { LabsService } from "@/entities/services/labs/table-service";
import { RoleType } from "@/widgets/main/_ui/table_1/_table-1";

export const useTableLogic = (role: RoleType, user_id?: string) => {
  const [editId, setEditId] = React.useState<TEditCellProps>({
    row: "",
    column: "",
  });
  const [myData, setMyData] = useState<RootTableData[]>([]);

  console.log("my data", myData);

  useEffect(() => {
    async function sendData() {
      try {
        const response = await LabsService.updateTable(myData);
        console.log("final response", response);
      } catch (error) {
        console.log(error);
      }
    }
    sendData();
  }, [myData]);

  useEffect(() => {
    async function getInitialTableFromTeacher(user_id: string) {
      try {
        const response = await LabsService.getTeacherTableData(user_id);
        console.log("common teacher data", response);
        setMyData([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }

    async function getInitialTable() {
      try {
        const response = await LabsService.getTableData();
        console.log("common table data student", response);
        setMyData([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("role", role, user_id);
    role === "teacher" && user_id
      ? getInitialTableFromTeacher(user_id)
      : getInitialTable();
  }, []);

  return {
    editId,
    myData,
    setEditId,
    setMyData,
  };
};
