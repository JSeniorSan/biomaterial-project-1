"use client";
import { SummaryService } from "@/entities/services/labs/summary-service";
import React, { useState } from "react";
import Table_2 from "@/widgets/main/_ui/table_1/_table-1";
import { Button, Input } from "antd";

export type InfoProps = {
  lab_name: string;
  user_id: string;
  setGetWork: (value: string) => void;
};

const DashboardInfo = ({ lab_name, user_id, setGetWork }: InfoProps) => {
  const [mark, setMark] = useState<string>("");
  console.log("lab_name", lab_name);
  console.log("user_id", user_id);
  console.log("mark", mark);

  const handleClickConfirmMark = async (
    labName: string,
    mark: string,
    userId: string
  ) => {
    try {
      const response = await SummaryService.sendMark(labName, mark, userId);
      console.log("sendMark data", response);
      setGetWork("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h3 className="p-3">Результаты:</h3>
        <Table_2 type="view" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="py-3">Оценка:</h3>
        <Input
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          className="h-10  w-12"
        />
        <Button onClick={() => handleClickConfirmMark(lab_name, mark, user_id)}>
          Confirm
        </Button>
      </div>
    </>
  );
};

export default DashboardInfo;
