"use client";

import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { Data, TProps } from "../table2/_table";

type TDataProps = (value: (val: Data[]) => Array<Data>) => void;

const TableCell = ({
  rowId,
  getValue,
  setMyData,
  editId,
  setEditId,
}: {
  rowId: string;
  getValue: string;
  setMyData: TDataProps;
  editId: TProps;
  setEditId: (val: { row: string; column: string }) => void;
}) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(getValue);
  }, [getValue]);

  const handleBlur = () => {
    console.log("saveData");
    setEditId({ row: "", column: "" });
    setMyData((old: Data[]) => {
      const columnIdStr = editId.column;
      return old.map((dataObj) => {
        if (dataObj.id !== Number(rowId)) {
          return dataObj;
        }
        return { ...dataObj, [columnIdStr]: value };
      });
    });
  };

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      className="rounded-none"
    />
  );
};

export default TableCell;
