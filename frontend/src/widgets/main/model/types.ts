import { Column } from "react-table";

export interface Info_blockInterface {
  id: number;
  value: string;
  pic: string | null;
}

export interface TheoryInterface {
  id: number;
  title: string;
  info_block: Info_blockInterface[];
}

export interface RootTableData {
  number: number | null;
  load_monomer_g: number | null;
  load_monomer_mole: number | null;
  load_monomer_mole_g: number | null;
  load_initiator_g: number | null;
  load_initiator_mole: number | null;
  load_initiator_mole_g: number | null;
  temperature: number | null;
  time: number | null;
  polymer_yield_g: number | null;
  polymer_yield_percent: number | null;
  polymerization_rate_percent: number | null;
  polymerization_rate_mole: number | null;
  polymer_characteristics_viscosity: number | null;
  polymer_characteristics_mol_mass: number | null;
}

export type TEditCellProps = { row: string; column: string };

export type ColumsType = () => Column<RootTableData>[];

export type TDataProps = (
  value: (val: RootTableData[]) => Array<RootTableData>
) => void;

export interface CellProps {
  rowId: number;
  getValue: string;
  setMyData: TDataProps;
  editId: TEditCellProps;
  setEditId: (val: TEditCellProps) => void;
}
