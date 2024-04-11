// "use client";
// import {
//   ColumnDef,
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import React, { useEffect, useState } from "react";
// import TableCell from "./_table-cell";

// export type THeadData = {
//   numberExperiense: string;
//   load: string;
//   monomer: string;
//   initiator: string;
//   initiator_g: string;
//   initiato_mole: string;
//   initator_mole_l: string;
//   monomer_g: string;
//   monomer_mole: string;
//   monomer_mole_g: string;
//   temperature: string;
//   time: string;
// };

// export interface TExperience {
//   number: number;
//   load_monomer_g: number;
//   load_monomer_mole: number;
//   load_monomer_mole_g: number;
//   load_initiator_g: number;
//   load_initiator_mole: number;
//   load_initiator_mole_g: number;
//   temperature: number;
//   time: number;
//   polymer_yield_g: number;
//   polymer_yield_percent: number;
//   polymerization_rate_percent: number;
//   polymerization_rate_mole: number;
//   polymer_characteristics_viscosity: number;
//   polymer_characteristics_mol_mass: number;
// }

// const defaultData: TExperience[] = [
//   {
//     number: 0,
//     load_monomer_g: 0,
//     load_monomer_mole: 0,
//     load_monomer_mole_g: 0,
//     load_initiator_g: 0,
//     load_initiator_mole: 0,
//     load_initiator_mole_g: 0,
//     temperature: 0,
//     time: 0,
//     polymer_yield_g: 0,
//     polymer_yield_percent: 0,
//     polymerization_rate_percent: 0,
//     polymerization_rate_mole: 0,
//     polymer_characteristics_viscosity: 0,
//     polymer_characteristics_mol_mass: 0,
//   },
// ];

// const columnHelper = createColumnHelper<TExperience>();

// const columns: ColumnDef<TExperience>[] = [
//   {
//     header: "Номер опыта",
//     footer: (props) => props.column.id,
//     cell: (props) => (
//       <TableCell
//         // column={props.}
//         getValue={props.getValue}
//         row={props.row}
//         table={props.table}
//       />
//     ),
//   },
//   {
//     header: "Загрузка",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "load_monomer_g",
//         header: () => <span>Мономер</span>,
//         footer: (props) => props.column.id,
//         columns: [
//           {
//             accessorKey: "load_monomer_g",
//             header: () => <span>г</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "load_monomer_g",
//             header: () => <span>моль</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "load_monomer_g",
//             header: () => <span>моль/л</span>,
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//       {
//         accessorFn: (row) => row.load_initiator_g,
//         id: "initiator",
//         cell: () => <span>23</span>,
//         header: () => <span>Инициатор</span>,
//         footer: (props) => props.column.id,
//         columns: [
//           {
//             accessorKey: "load_monomer_g",
//             header: () => <span>Мономер</span>,
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//     ],
//   },
// ......................................................
// columnHelper.accessor("number", {
//   header: "Номер опыта",
//   footer: (props) => props.column.id,
//   cell: (props) => (
//     <TableCell
//       column={props.column}
//       getValue={props.getValue}
//       row={props.row}
//       table={props.table}
//     />
//   ),
// }),
// columnHelper.group({
//   header: "Загрузка",
//   footer: (props) => props.column.id,
//   columns: [
//     columnHelper.group({
//       header: "Мономер",
//       footer: (props) => props.column.id,
//       columns: [
//         columnHelper.accessor("load_monomer_g", {
//           header: "г",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//         columnHelper.accessor("load_monomer_mole", {
//           header: "моль",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//         columnHelper.accessor("load_monomer_mole_g", {
//           header: "моль/л",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//       ],
//     }),
//     columnHelper.group({
//       header: "Инициатор",
//       columns: [
//         columnHelper.accessor("load_initiator_g", {
//           header: "г",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//         columnHelper.accessor("load_initiator_mole", {
//           header: "моль",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//         columnHelper.accessor("load_initiator_mole_g", {
//           header: "моль/г",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//       ],
//     }),
//   ],
// }),
// columnHelper.accessor("temperature", {
//   header: "Температура, °С",
//   cell: (props) => (
//     <TableCell
//       column={props.column}
//       getValue={props.getValue}
//       row={props.row}
//       table={props.table}
//     />
//   ),
// }),
// columnHelper.accessor("time", {
//   header: "Время, ч",
//   cell: (props) => (
//     <TableCell
//       column={props.column}
//       getValue={props.getValue}
//       row={props.row}
//       table={props.table}
//     />
//   ),
// }),
// columnHelper.group({
//   header: "Выход полимера",
//   columns: [
//     columnHelper.group({
//       header: "г",
//       columns: [
//         columnHelper.accessor("polymer_yield_g", {
//           header: " ",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//       ],
//     }),
//     columnHelper.accessor("polymer_yield_percent", {
//       header: "%",
//       cell: (props) => (
//         <TableCell
//           column={props.column}
//           getValue={props.getValue}
//           row={props.row}
//           table={props.table}
//         />
//       ),
//     }),
//   ],
// }),
// columnHelper.group({
//   header: "Скорость полимеризации",
//   columns: [
//     columnHelper.accessor("polymerization_rate_percent", {
//       header: "%/ч или %/мин",
//       cell: (props) => (
//         <TableCell
//           column={props.column}
//           getValue={props.getValue}
//           row={props.row}
//           table={props.table}
//         />
//       ),
//     }),
//     columnHelper.accessor("polymerization_rate_mole", {
//       header: "Моль/л*с",
//       cell: (props) => (
//         <TableCell
//           column={props.column}
//           getValue={props.getValue}
//           row={props.row}
//           table={props.table}
//         />
//       ),
//     }),
//   ],
// }),
// columnHelper.group({
//   header: "Характеристики полимеров",
//   columns: [
//     columnHelper.group({
//       header: "[η]",
//       columns: [
//         columnHelper.accessor("polymer_characteristics_viscosity", {
//           header: " ",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//       ],
//     }),
//     columnHelper.group({
//       header: "MM",
//       columns: [
//         columnHelper.accessor("polymer_characteristics_viscosity", {
//           header: " ",
//           cell: (props) => (
//             <TableCell
//               column={props.column}
//               getValue={props.getValue}
//               row={props.row}
//               table={props.table}
//             />
//           ),
//         }),
//       ],
//     }),
//   ],
// }),
// ];

// const Page = () => {
//   const [data, setData] = useState(() => [...defaultData]);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     meta: {
//       updateData: (rowIndex: number, property: string, value: string) => {
//         setData((old) =>
//           old.map((row, index) => {
//             if (index === rowIndex) {
//               return {
//                 ...old[rowIndex],
//                 [property]: value,
//               };
//             }
//             return row;
//           })
//         );
//       },
//     },
//   });
//   return (
//     <table className="border-collapse border m-6 bg-slate-500 w-96 overflow-x-auto ">
//       <thead>
//         {table.getHeaderGroups().map((headGroup) => {
//           return (
//             <tr key={headGroup.id}>
//               {headGroup.headers.map((header) => {
//                 return (
//                   <th
//                     key={header.id}
//                     className="border border-red-300 text-left p-1">
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </th>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </thead>
//       <tbody>
//         {table.getRowModel().rows.map((row) => {
//           return (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => {
//                 return (
//                   <td key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default Page;

import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
