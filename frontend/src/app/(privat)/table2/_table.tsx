"use client";
import { Column, useTable } from "react-table";
import React, { useEffect, useState } from "react";
import TableCell from "../table/_table-cell";
import { Button } from "antd";

export interface RootTableData {
  number: number;
  load_monomer_g: number;
  load_monomer_mole: number;
  load_monomer_mole_g: number;
  load_initiator_g: number;
  load_initiator_mole: number;
  load_initiator_mole_g: number;
  temperature: number;
  time: number;
  polymer_yield_g: number;
  polymer_yield_percent: number;
  polymerization_rate_percent: number;
  polymerization_rate_mole: number;
  polymer_characteristics_viscosity: number;
  polymer_characteristics_mol_mass: number;
}

function createInitialRow(id: number) {
  return {
    number: id,
    load_monomer_g: 0,
    load_monomer_mole: 0,
    load_monomer_mole_g: 0,
    load_initiator_g: 0,
    load_initiator_mole: 0,
    load_initiator_mole_g: 0,
    temperature: 0,
    time: 0,
    polymer_yield_g: 0,
    polymer_yield_percent: 0,
    polymerization_rate_percent: 0,
    polymerization_rate_mole: 0,
    polymer_characteristics_viscosity: 0,
    polymer_characteristics_mol_mass: 0,
  };
}

export type TProps = { row: string; column: string };

// export interface Data {
//   id: number;
//   monomer: {
//     g: string;
//     mole: string;
//     mole_l: string;
//   };
//   initiator: {
//     g: string;
//     mole: string;
//     mole_g: string;
//   };
//   temperature: string;
//   time: string;
//   convertion: {
//     g: string;
//     percent: string;
//   };
//   polymerization: {
//     percent_time: string;
//     mole_ls: string;
//   };
//   characterization: {
//     n: string;
//     MM: string;
//   };
// }

const Table_2 = () => {
  const [editId, setEditId] = React.useState<TProps>({ row: "", column: "" });
  const [myData, setMyData] = useState<RootTableData[]>([]);

  useEffect(() => {
    console.log(myData);
  }, [myData]);

  const handleEditClick = (cellId: TProps) => {
    setEditId(cellId);
  };

  const handleAddNewRow = () => {
    setMyData((old) => [...old, createInitialRow(old.length + 1)]);
  };

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: myData });

  return (
    <div className="xl:w-[770px] lg:w-[450px] md:w-[400px] sm:w-[450px] w-[300px] overflow-hidden overflow-x-scroll border shadow-lg dark:bg-gradient-to-tr dark:from-slate-500/65 dark:to-blue-950/40 p-3 dark:text-white/80 rounded bg-gradient-to-tr from-cyan-700/30 to-indigo-400/50 text-neutral-600 ">
      <table
        {...getTableProps()}
        className="border border-collapse bg-opacity-50 dark:backdrop-blur-md dark:bg-slate-700/45 ">
        <caption>Таблица 1</caption>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
              className="border">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="border min-w-24">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="border text-center">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="border"
                      onClick={() =>
                        handleEditClick({
                          row: cell.row.id,
                          column: cell.column.id,
                        })
                      }>
                      {
                        <TableCell
                          rowId={row.index}
                          getValue={cell.value}
                          editId={editId}
                          setMyData={setMyData}
                          setEditId={setEditId}
                        />
                      }
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        onClick={handleAddNewRow}
        className="mt-2 bg-transparent dark:text-white text-black hover:after:content-['_New_row'] ">
        +
      </Button>
    </div>
  );
};

export default Table_2;
