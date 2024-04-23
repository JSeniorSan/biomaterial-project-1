import { Column } from "react-table";

import React, { useState } from "react";
import { RootTableData, TProps } from "@/widgets/main/model/types";

export const useColumn = () => {
  const [editId, setEditId] = React.useState<TProps>({ row: "", column: "" });
  const [myData, setMyData] = useState<RootTableData[]>([]);

  const columns: Column<RootTableData>[] = React.useMemo(
    () => [
      {
        Header: "Номер опыта",
        accessor: ({ number }) => number,
      },
      {
        Header: "Мономер",
        columns: [
          {
            Header: "г(1)",
            accessor: "load_monomer_g",
          },
          {
            Header: "моль(1)",
            accessor: "load_monomer_mole",
          },
          {
            Header: "моль/л(1)",
            accessor: "load_monomer_mole_g",
          },
        ],
      },
      {
        Header: "Инициатор",
        columns: [
          {
            Header: "г(2)",
            accessor: "load_initiator_g",
          },
          {
            Header: "моль(2)",
            accessor: "load_initiator_mole",
          },
          {
            Header: "моль/г(2)",
            accessor: "load_initiator_mole_g",
          },
        ],
      },
      {
        Header: "Температура",
        accessor: "temperature",
      },
      {
        Header: "Время",
        accessor: "time",
      },
      {
        Header: "Выход полимера",
        columns: [
          {
            Header: "г",
            accessor: "polymer_yield_g",
          },
          {
            Header: "%",
            accessor: "polymer_yield_percent",
          },
        ],
      },
      {
        Header: "Скорость полимеризации",
        columns: [
          {
            Header: "%/ч или %/мин",
            accessor: "polymerization_rate_percent",
          },
          {
            Header: "Моль/л*с",
            accessor: "polymerization_rate_mole",
          },
        ],
      },
      {
        Header: "Характеристики полимеров",
        columns: [
          {
            Header: "[η]",
            accessor: "polymer_characteristics_viscosity",
          },
          {
            Header: "ММ",
            accessor: "polymer_characteristics_mol_mass",
          },
        ],
      },
    ],
    []
  );
  return {
    editId,
    myData,
    setEditId,
    setMyData,
    columns,
  };
};
