"use client";
import { useTable } from "react-table";
import React from "react";
import TableCell from "../_table-cell";
import { Button } from "antd";
import { LabsService } from "@/entities/services/labs/table-service";
import { useTableLogic } from "@/shared/hooks/useTableLogic";
import { useColumns } from "@/shared/hooks/useColumns";
import { Table_1_Colums_Config } from "./colums-config-1";
import { TEditCellProps } from "@/widgets/main/model/types";

type TableType = "edit" | "view";

const Table_2 = ({ type }: { type: TableType }) => {
  const { myData, editId, setMyData, setEditId } = useTableLogic();
  console.log(type);

  const { columns } = useColumns(Table_1_Colums_Config);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: myData });

  const handleAddNewRow = async () => {
    try {
      const response = await LabsService.createEmptyRow(myData.length + 1);
      console.log(response);
      setMyData((old) => {
        return [...old, response.data];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (cellId: TEditCellProps) => {
    setEditId(cellId);
  };

  return (
    <div className="xl:w-[770px] lg:w-[450px] md:w-[400px] sm:w-[450px] w-[300px] overflow-hidden overflow-x-scroll border shadow-lg dark:bg-gradient-to-tr dark:from-slate-500/65 dark:to-blue-950/40 p-3 dark:text-white/80 rounded bg-gradient-to-tr from-cyan-700/30 to-indigo-400/50 text-neutral-600 ">
      <table
        {...getTableProps()}
        className="border border-collapse bg-opacity-50 dark:backdrop-blur-md dark:bg-slate-700/45 ">
        <caption>Таблица 1</caption>
        <thead>
          {headerGroups.map((headerGroup, id) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={id}
              className="border">
              {headerGroup.headers.map((column) => {
                console.log(id);
                return (
                  <th
                    {...column.getHeaderProps()}
                    key={column.id}
                    className="border min-w-24">
                    {column.render("Header")}
                  </th>
                );
              })}
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
                      {type === "view" && (
                        <div key={cell.column.id}>{cell.value}</div>
                      )}
                      {type === "edit" && (
                        <TableCell
                          rowId={row.index}
                          getValue={cell.value}
                          editId={editId}
                          setMyData={setMyData}
                          setEditId={setEditId}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {type === "edit" && (
        <Button
          onClick={handleAddNewRow}
          className="mt-2 bg-transparent dark:text-white text-black hover:after:content-['_New_row'] ">
          +
        </Button>
      )}
    </div>
  );
};

export default Table_2;
