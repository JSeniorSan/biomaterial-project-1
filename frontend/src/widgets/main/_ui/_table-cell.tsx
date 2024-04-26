"use client";

import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { CellProps, RootTableData } from "../model/types";

const TableCell = (props: CellProps) => {
  const { rowId, getValue, setMyData, editId, setEditId } = props;
  const [value, setValue] = useState<number>(0);
  const columnIdStr = editId.column;

  useEffect(() => {
    setValue(Number(getValue));
  }, [getValue]);

  const handleBlur = () => {
    setEditId({ row: "", column: "" });

    setMyData((old: RootTableData[]) => {
      return old.map((dataObj) =>
        dataObj.number !== rowId + 1
          ? dataObj
          : { ...dataObj, [columnIdStr]: value }
      );
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
