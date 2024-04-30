import { SummaryService } from "@/entities/services/labs/summary-service";
import { DataType } from "@/widgets/dashboard/model/types";
import { useEffect, useState } from "react";

export const useTeacherData = () => {
  const [summaryList, setSummaryList] = useState<DataType[]>([]);

  useEffect(() => {
    const getAllWorks = async () => {
      try {
        const response = await SummaryService.getSummary();
        const data = response.data;
        console.log("summary data", data);
        const prepareData = data.map((item, id) => {
          return {
            key: id + 1,
            student: item.user_name_surname,
            lab_1: {
              user_id: item.user_id,
              status: item.lab_summary_list[0]
                ? item.lab_summary_list[0].status_or_mark
                : "uncompleted",
              lab_full_name: item.lab_summary_list[0]?.name
                ? item.lab_summary_list[0].name
                : "",
            },
            lab_2: {
              user_id: item.user_id,
              status: item.lab_summary_list[1]
                ? item.lab_summary_list[1].status_or_mark
                : "uncompleted",
              lab_full_name: item.lab_summary_list[1]?.name
                ? item.lab_summary_list[1].name
                : "",
            },
            lab_3: {
              user_id: item.user_id,
              status: item.lab_summary_list[2]
                ? item.lab_summary_list[2].status_or_mark
                : "uncompleted",
              lab_full_name: item.lab_summary_list[2]?.name
                ? item.lab_summary_list[2].name
                : "",
            },
            lab_4: {
              user_id: item.user_id,
              status: item.lab_summary_list[3]
                ? item.lab_summary_list[3].status_or_mark
                : "uncompleted",
              lab_full_name: item.lab_summary_list[3]?.name
                ? item.lab_summary_list[3].name
                : "",
            },
          };
        });
        console.log("prepare data", prepareData);

        setSummaryList(prepareData);
      } catch (error) {
        console.log(error);
      }
    };
    getAllWorks();
  }, []);

  return {
    summaryList,
  };
};
