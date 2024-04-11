"use client";

import { Input } from "antd";
import React, { useEffect, useState } from "react";

const TableCell = ({ getValue }: { getValue: string }) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(getValue);
  }, [getValue]);

  const handleBlur = () => {
    console.log("saveData");
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
