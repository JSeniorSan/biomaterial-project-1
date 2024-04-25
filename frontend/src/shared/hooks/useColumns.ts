"use client";
import { ColumsType } from "@/widgets/main/model/types";
import { useMemo } from "react";

export const useColumns = (cols: ColumsType) => {
  const columns = useMemo(cols, [cols]);
  return { columns };
};
