"use client";
import { Column, useTable } from "react-table";
import React, { useEffect, useState } from "react";
import TableCell from "../table/_table-cell";
import { Button } from "antd";

function createInitialRow(id: number) {
  return {
    id: id,
    monomer: {
      g: "",
      mole: "",
      mole_l: "",
    },
    initiator: {
      g: "",
      mole: "",
      mole_g: "",
    },
    temperature: "",
    time: "",
    convertion: {
      g: "",
      percent: "",
    },
    polymerization: {
      percent_time: "",
      mole_ls: "",
    },
    characterization: {
      n: "",
      MM: "",
    },
  };
}

export type TProps = { row: string; column: string };

export interface Data {
  id: number;
  monomer: {
    g: string;
    mole: string;
    mole_l: string;
  };
  initiator: {
    g: string;
    mole: string;
    mole_g: string;
  };
  temperature: string;
  time: string;
  convertion: {
    g: string;
    percent: string;
  };
  polymerization: {
    percent_time: string;
    mole_ls: string;
  };
  characterization: {
    n: string;
    MM: string;
  };
}

const Table_2 = () => {
  const [editId, setEditId] = React.useState<TProps>({ row: "", column: "" });
  const [myData, setMyData] = useState<Data[]>([]);

  useEffect(() => {
    console.log(myData);
  }, [myData]);

  const handleEditClick = (cellId: TProps) => {
    setEditId(cellId);
  };

  const handleAddNewRow = () => {
    setMyData((old) => [...old, createInitialRow(old.length + 1)]);
  };

  const columns: Column<Data>[] = React.useMemo(
    () => [
      {
        Header: "Номер опыта",
        accessor: ({ id }) => id,
      },
      {
        Header: "Мономер",
        columns: [
          {
            Header: "г(1)",
            accessor: "monomer.g",
          },
          {
            Header: "моль(1)",
            accessor: "monomer.mole",
          },
          {
            Header: "моль/л(1)",
            accessor: "monomer.mole_l",
          },
        ],
      },
      {
        Header: "Инициатор",
        columns: [
          {
            Header: "г(2)",
            accessor: "initiator.g",
          },
          {
            Header: "моль(2)",
            accessor: "initiator.mole",
          },
          {
            Header: "моль/г(2)",
            accessor: "initiator.mole_g",
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
            accessor: "convertion.g",
          },
          {
            Header: "%",
            accessor: "convertion.percent",
          },
        ],
      },
      {
        Header: "Скорость полимеризации",
        columns: [
          {
            Header: "%/ч или %/мин",
            accessor: "polymerization.percent_time",
          },
          {
            Header: "Моль/л*с",
            accessor: "polymerization.mole_ls",
          },
        ],
      },
      {
        Header: "Характеристики полимеров",

        columns: [
          {
            Header: "[η]",
            accessor: "characterization.n",
          },
          {
            Header: "ММ",
            accessor: "characterization.MM",
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
                          rowId={row.id}
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
      <Button onClick={handleAddNewRow}>Add new row</Button>
    </div>
  );
};

export default Table_2;
