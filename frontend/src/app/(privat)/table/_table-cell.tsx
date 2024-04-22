"use client";

import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { RootTableData, TProps } from "../table2/_table";

type TDataProps = (
  value: (val: RootTableData[]) => Array<RootTableData>
) => void;

export interface CellProps {
  rowId: number;
  getValue: string;
  setMyData: TDataProps;
  editId: TProps;
  setEditId: (val: { row: string; column: string }) => void;
}

const TableCell = ({
  rowId,
  getValue,
  setMyData,
  editId,
  setEditId,
}: CellProps) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setValue(Number(getValue));
  }, [getValue]);

  const handleBlur = () => {
    console.log("saveData");
    setEditId({ row: "", column: "" });
    setMyData((old: RootTableData[]) => {
      const columnIdStr = editId.column;

      return old.map((dataObj) => {
        if (dataObj.number !== rowId + 1) {
          console.log("dataObj.number", dataObj.number);
          console.log("Number(rowId)", rowId);
          return dataObj;
        }
        console.log("меняем", { ...dataObj, [columnIdStr]: value });
        return { ...dataObj, [columnIdStr]: value };
      });
    });
  };

  return (
    <Input
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      onBlur={handleBlur}
      type="number"
      className="rounded-none"
    />
  );
};

export default TableCell;
