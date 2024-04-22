import { API_URL } from "@/entities/http";
import axios from "axios";

export interface UpdateDataInterface {
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

export class LabsService {
  static createEmptyRow(row_number: number) {
    return axios.post(
      API_URL + "/labs/styrol-polymerization-bulk/create_empty_row",
      {
        row_number: row_number,
      }
    );
  }
  static updateTable(updateData: UpdateDataInterface[]) {
    return axios.patch(
      API_URL + "/labs/styrol-polymerization-bulk/",
      updateData,
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
