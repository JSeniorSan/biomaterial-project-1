"use client";
import React, { useEffect, useState } from "react";
import { RootTableData, TEditCellProps } from "@/widgets/main/model/types";
import { LabsService } from "@/entities/services/labs/table-service";

export const useTableLogic = () => {
  const [editId, setEditId] = React.useState<TEditCellProps>({
    row: "",
    column: "",
  });
  const [myData, setMyData] = useState<RootTableData[]>([]);

  useEffect(() => {
    async function sendData() {
      try {
        myData;
        const response = await LabsService.updateTable(myData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    sendData();
  }, [myData]);

  useEffect(() => {
    async function getInitialTable() {
      try {
        const response = await LabsService.getTableData();
        console.log(response);
        setMyData([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }

    getInitialTable();
  }, []);

  return {
    editId,
    myData,
    setEditId,
    setMyData,
  };
};
