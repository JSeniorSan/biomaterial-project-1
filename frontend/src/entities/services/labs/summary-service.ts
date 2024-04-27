import $api, { API_URL } from "@/entities/http";
import { Summary } from "@/widgets/dashboard/ui/dasboard-list";
import axios from "axios";

export class SummaryService {
  static changeStatus(lab_title: string) {
    return $api.patch("/summary-table/change-lab-status", null, {
      params: {
        lab_name: lab_title,
      },
    });
  }
  static getSummary() {
    return axios.get<Summary[]>(`${API_URL}/summary-table`);
  }
}
