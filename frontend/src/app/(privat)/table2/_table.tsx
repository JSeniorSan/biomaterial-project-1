"use client";
import { Column, useTable } from "react-table";
import React, { useState } from "react";
import TableCell from "../table/_table-cell";

// type Column<Data> =
//   | {
//       Header: string;
//       accessor: keyof Data;
//     }
//   | {
//       Header: string;
//       columns: Column<Data>[];
//     };

interface Data {
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

const data: Data[] = [
  {
    id: 1,
    monomer: {
      g: "10",
      mole: "5",
      mole_l: "2",
    },
    initiator: {
      g: "1",
      mole: "2",
      mole_g: "7",
    },
    temperature: "dsf",
    time: "10",
    convertion: {
      g: "100",
      percent: "30",
    },
    polymerization: {
      percent_time: "3",
      mole_ls: "10",
    },
    characterization: {
      n: "32",
      MM: "342",
    },
  },
  {
    id: 2,
    monomer: {
      g: "10",
      mole: "5",
      mole_l: "2",
    },
    initiator: {
      g: "1",
      mole: "2",
      mole_g: "7",
    },
    temperature: "dsf",
    time: "10",
    convertion: {
      g: "100",
      percent: "30",
    },
    polymerization: {
      percent_time: "3",
      mole_ls: "10",
    },
    characterization: {
      n: "32",
      MM: "342",
    },
  },
  {
    id: 3,
    monomer: {
      g: "10",
      mole: "5",
      mole_l: "2",
    },
    initiator: {
      g: "1",
      mole: "2",
      mole_g: "7",
    },
    temperature: "dsf",
    time: "10",
    convertion: {
      g: "100",
      percent: "30",
    },
    polymerization: {
      percent_time: "3",
      mole_ls: "10",
    },
    characterization: {
      n: "32",
      MM: "342",
    },
  },
];

const Table_2 = () => {
  const [editRowId, setEditRowId] = React.useState<string>("");
  const [dataState, setDataState] = useState(() => [...data]);

  const handleBlur = () => {
    setEditRowId("");
  };

  const handleEditClick = (rowId: string) => {
    setEditRowId(rowId);
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
            Header: "г",
            accessor: "monomer.g",
          },
          {
            Header: "моль",
            accessor: "monomer.mole",
          },
          {
            Header: "моль/л",
            accessor: "monomer.mole_l",
          },
        ],
      },
      {
        Header: "Инициатор",
        columns: [
          {
            Header: "г",
            accessor: "initiator.g",
          },
          {
            Header: "моль",
            accessor: "initiator.mole",
          },
          {
            Header: "моль/г",
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
    useTable({ columns, data });

  return (
    <div className="xl:w-[770px] lg:w-[450px] md:w-[400px] sm:w-[450px] w-[250px] overflow-hidden overflow-x-scroll border shadow-lg bg-gradient-to-tr from-slate-500/65 to-blue-950/40  p-3 dark:text-white/80 rounded ">
      <table
        {...getTableProps()}
        className="border border-collapse bg-opacity-50 backdrop-blur-md bg-slate-700/45">
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
                      onClick={() => handleEditClick(cell.column.id)}
                      onBlur={handleBlur}>
                      {cell.column.id === editRowId ? (
                        <TableCell getValue={cell.value} />
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table_2;
