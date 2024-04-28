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

type LabContent = {
  user_id: string;
  status: LabStatus;
};

interface DataType {
  key: React.Key;
  student: string;
  lab_1: LabContent;
  lab_2: LabContent;
  lab_3: LabContent;
  lab_4: LabContent;
}

export interface Lab_summary_list {
  name: string;
  status_or_mark: string;
}

export interface Summary {
  user_name_surname: string;
  user_id: string;
  lab_summary_list: Lab_summary_list[];
}

export type PropsType = {
  setGetWork: (value: string) => void;
};

const App: React.FC<PropsType> = (props) => {
  const { setGetWork } = props;
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
            lab_1: {
              user_id: item.user_id,
              status: item.lab_summary_list[0]
                ? item.lab_summary_list[0].status_or_mark
                : "uncompleted",
            },
            lab_2: {
              user_id: item.user_id,
              status: item.lab_summary_list[1]
                ? item.lab_summary_list[1].status_or_mark
                : "uncompleted",
            },
            lab_3: {
              user_id: item.user_id,
              status: item.lab_summary_list[2]
                ? item.lab_summary_list[2].status_or_mark
                : "uncompleted",
            },
            lab_4: {
              user_id: item.user_id,
              status: item.lab_summary_list[3]
                ? item.lab_summary_list[3].status_or_mark
                : "uncompleted",
            },
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

  const handleViewUserWork = (id: string) => {
    setGetWork(id);
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
              render={(status: { status: LabStatus; user_id: string }) => {
                const color = status.status === "unrated" ? "blue" : "volcano";
                console.log("stat", status);

                const popContent = () => {
                  if (status.status === "unrated") {
                    return (
                      <Button
                        onClick={() => handleViewUserWork(status.user_id)}>
                        Посмотреть результаты
                      </Button>
                    );
                  }
                  return null;
                };

                return (
                  <>
                    {typeof status.status !== "number" ? (
                      <Popover
                        content={popContent}
                        title={
                          status.status === "unrated"
                            ? "Проверить работу"
                            : "Данные не были получены"
                        }
                        trigger="click">
                        <Tag color={color} className="cursor-pointer">
                          {status.status}
                        </Tag>
                      </Popover>
                    ) : (
                      <div>{status.status}</div>
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
