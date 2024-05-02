import { SummaryService } from "@/entities/services/labs/summary-service";
import { UsersService } from "@/entities/services/labs/users-service";
import { Lab_summary_list } from "@/widgets/dashboard/model/types";
import { useEffect, useState } from "react";

export const useStudentData = () => {
  const [info, setInfo] = useState<Lab_summary_list[]>();

  useEffect(() => {
    const getCurrentUSer = async () => {
      const response = await UsersService.getCurrentUser();
      const data = response.data;
      console.log("first response data", data);
      const summaryResponse = await SummaryService.getSummary();
      const summaryData = summaryResponse.data;
      console.log("summData", summaryData);
      const result = summaryData.find((item) => {
        return item.user_id === data.user_id;
      });
      console.log("result", result);
      result && setInfo(result.lab_summary_list);
    };
    getCurrentUSer();
  }, []);

  return {
    info,
  };
};
