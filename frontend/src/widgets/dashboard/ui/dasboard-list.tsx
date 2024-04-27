"use client";
import React, { useEffect, useState } from "react";
import { Button, Popover, Table, Tag } from "antd";
import { useRouter } from "next/navigation";
import { SummaryService } from "@/entities/services/labs/summary-service";
import { Divide } from "lucide-react";

const { Column } = Table;

const columns = [
  {
    title: "Student",
    dataIndex: "student",
    key: "1",
  },
  {
    title: "Lab 1",
    dataIndex: "lab_1",
    key: "2",
  },
  {
    title: "Lab 2",
    dataIndex: "lab_2",
    key: "3",
  },
  {
    title: "Lab 3",
    dataIndex: "lab_3",
    key: "4",
  },
  {
    title: "Lab 4",
    dataIndex: "lab_4",
    key: "5",
  },
];

type LabStatus = string | number;

interface DataType {
  key: React.Key;
  student: string;
  lab_1: LabStatus;
  lab_2: LabStatus;
  lab_3: LabStatus;
  lab_4: LabStatus;
}

export interface Lab_summary_list {
  name: string;
  status_or_mark: string;
}

export interface Summary {
  user_name_surname: string;
  lab_summary_list: Lab_summary_list[];
}

const App: React.FC = () => {
  const [summaryList, setSummaryList] = useState<DataType[]>([]);

  useEffect(() => {
    const getAllWorks = async () => {
      try {
        const response = await SummaryService.getSummary();
        const data = response.data;
        const prepareData = data.map((item, id) => {
          return {
            key: id + 1,
            student: item.user_name_surname,
            lab_1: item.lab_summary_list[0]
              ? item.lab_summary_list[0].status_or_mark
              : "uncompleted",
            lab_2: item.lab_summary_list[1]
              ? item.lab_summary_list[1].status_or_mark
              : "uncompleted",
            lab_3: item.lab_summary_list[2]
              ? item.lab_summary_list[2].status_or_mark
              : "uncompleted",
            lab_4: item.lab_summary_list[3]
              ? item.lab_summary_list[3].status_or_mark
              : "uncompleted",
          };
        });
        console.log("prepare data", prepareData);

        setSummaryList(prepareData);
      } catch (error) {
        console.error(error);
      }
    };
    getAllWorks();
  }, []);
  // const router = useRouter();

  const handleViewUserWork = () => {
    console.log("click");
    // router.push(`/dashboard/${id}`);
  };

  return (
    <Table dataSource={summaryList} pagination={false} bordered>
      <Column title="Студент" dataIndex="student" key="student" />
      {Array(4)
        .fill(1)
        .map((_, index) => {
          const incrementIndex = index + 1;
          return (
            <Column
              title={`Lab ${incrementIndex}`}
              dataIndex={`lab_${incrementIndex}`}
              key={incrementIndex}
              render={(status: LabStatus) => {
                const color = status === "unrated" ? "blue" : "volcano";

                const popContent = () => {
                  if (status === "unrated") {
                    return <Button onClick={handleViewUserWork}>Click</Button>;
                  }
                  return null;
                };

                return (
                  <>
                    {typeof status !== "number" ? (
                      <Popover
                        content={popContent}
                        title={
                          status === "done"
                            ? "Проверить работу"
                            : "Данные не были получены"
                        }
                        trigger="click">
                        <Tag color={color} className="cursor-pointer">
                          {status}
                        </Tag>
                      </Popover>
                    ) : (
                      <div>{status}</div>
                    )}
                  </>
                );
              }}
            />
          );
        })}
    </Table>
  );
};

export default App;
