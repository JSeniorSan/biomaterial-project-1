import $api from "@/entities/http";
import { RootTableData } from "@/widgets/main/model/types";
import { AxiosResponse } from "axios";

export class LabsService {
  static createEmptyRow(
    row_number: number
  ): Promise<AxiosResponse<RootTableData>> {
    return $api.post(
      "/labs/styrol-polymerization-bulk/create_empty_row",
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
}
