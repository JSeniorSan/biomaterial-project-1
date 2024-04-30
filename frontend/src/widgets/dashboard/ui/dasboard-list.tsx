"use client";
import React from "react";
import { Button, Popover, Table, Tag } from "antd";
import { LabContent, PropsType } from "../model/types";
import { useTeacherData } from "@/shared/hooks/useTeacherData";
import Column from "antd/es/table/Column";

const DashboardList: React.FC<PropsType> = (props) => {
  const { setGetWork, setName } = props;
  const { summaryList } = useTeacherData();

  const handleViewUserWork = (id: string, full_name: string) => {
    setName(full_name);
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
              render={(status: LabContent) => {
                const color = status.status === "unrated" ? "blue" : "volcano";
                console.log("stat", status);

                const popContent = () => {
                  if (
                    status.status === "unrated" ||
                    typeof status.status === "number"
                  ) {
                    return (
                      <Button
                        onClick={() =>
                          handleViewUserWork(
                            status.user_id,
                            status.lab_full_name
                          )
                        }>
                        Посмотреть
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
                      <Popover
                        content={popContent}
                        title={"Изменить оценку"}
                        trigger="click">
                        <Tag color={"blue"} className="cursor-pointer">
                          {status.status}
                        </Tag>
                      </Popover>
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

export default DashboardList;
