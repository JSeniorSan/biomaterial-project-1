"use client";
import React from "react";
import { Popover, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

type LabStatus = "done" | "uncompleted";

interface DataType {
  key: React.Key;
  class: string;
  student: string;
  lab_1: LabStatus;
  lab_2: LabStatus;
  lab_3: LabStatus;
  lab_4: LabStatus;
}

const data: DataType[] = [
  {
    key: "1",
    student: "Владимир Яковлев",
    class: "МПР-10",
    lab_1: "done",
    lab_2: "uncompleted",
    lab_3: "uncompleted",
    lab_4: "uncompleted",
  },
  {
    key: "2",
    student: "Владимир Яковлев",
    class: "МПР-10",
    lab_1: "uncompleted",
    lab_2: "uncompleted",
    lab_3: "uncompleted",
    lab_4: "uncompleted",
  },
  {
    key: "3",
    student: "Владимир Яковлев",
    class: "МПР-10",
    lab_1: "uncompleted",
    lab_2: "uncompleted",
    lab_3: "uncompleted",
    lab_4: "uncompleted",
  },
];

const App: React.FC = () => (
  <Table dataSource={data}>
    <Column title="Студент" dataIndex="student" key="student" />
    <Column
      title="Lab 1"
      dataIndex="lab_1"
      key="lab_1"
      render={(status: string) => {
        const color = status === "done" ? "green" : "volcano";

        const popContent = (
          <div>
            <h1>Дата</h1>
            <p>Ссылка на данные</p>
          </div>
        );

        return (
          <>
            <Popover content={popContent} title="" trigger="click">
              <Tag color={color}>{status}</Tag>
            </Popover>
          </>
        );
      }}
    />
    <Column
      title="Lab 2"
      dataIndex="lab_2"
      key="lab_2"
      render={(status: string) => {
        const color = status === "done" ? "green" : "volcano";

        const popContent = (
          <div>
            <h1>Дата</h1>
            <p>Ссылка на данные</p>
          </div>
        );

        return (
          <>
            <Popover content={popContent} title="" trigger="click">
              <Tag color={color}>{status}</Tag>
            </Popover>
          </>
        );
      }}
    />
    <Column
      title="Lab 3"
      dataIndex="lab_3"
      key="lab_3"
      render={(status: string) => {
        const color = status === "done" ? "green" : "volcano";

        const popContent = (
          <div>
            <h1>Дата</h1>
            <p>Ссылка на данные</p>
          </div>
        );

        return (
          <>
            <Popover content={popContent} title="" trigger="click">
              <Tag color={color}>{status}</Tag>
            </Popover>
          </>
        );
      }}
    />
    <Column
      title="Lab 4"
      dataIndex="lab_4"
      key="lab_4"
      render={(status: string) => {
        const color = status === "done" ? "green" : "volcano";
        const popContent = (
          <div>
            <h1>Дата</h1>
            <p>Ссылка на данные</p>
          </div>
        );

        return (
          <>
            <Popover content={popContent} title="" trigger="click">
              <Tag color={color}>{status}</Tag>
            </Popover>
          </>
        );
      }}
    />
  </Table>
);

export default App;
