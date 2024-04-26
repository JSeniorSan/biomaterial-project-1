import $api from "@/entities/http";
import { RootTableData } from "@/widgets/main/model/types";
import axios, { AxiosResponse } from "axios";

export class LabsService {
  static createEmptyRow(
    row_number: number
  ): Promise<AxiosResponse<RootTableData>> {
    return $api.post(
      "/labs/styrol-polymerization-bulk/create-empty-row",
      null,
      { params: { row_number } }
    );
  }
  static updateTable(updateData: RootTableData[]) {
    return $api.patch("/labs/styrol-polymerization-bulk/", updateData, {
      headers: { "Content-Type": "application/json" },
    });
  }

  static getTableData() {
    return $api.get("/labs/styrol-polymerization-bulk/get-as-student");
  }

  static setSummary(id: string) {
    return axios.post("/summary-table", {
      params: {
        user_id: id,
      },
    });
  }

  static getSummary() {
    return axios.get("/summary-table");
  }
}
