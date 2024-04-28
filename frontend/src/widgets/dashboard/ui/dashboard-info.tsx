"use client";
import { SummaryService } from "@/entities/services/labs/summary-service";
import React from "react";
import Table_2 from "@/widgets/main/_ui/table_1/_table-1";
import { Button, Input } from "antd";

export type InfoProps = {
  mark: string;
  lab_name: string;
  user_id: string;
  setGetWork: (value: string) => void;
  setMark: (value: string) => void;
};

const DashboardInfo = ({
  lab_name,
  mark,
  user_id,
  setGetWork,
  setMark,
}: InfoProps) => {
  const handleClickConfirmMark = async (
    mark: string,
    userId: string,
    labName: string
  ) => {
    try {
      const response = await SummaryService.sendMark(mark, userId, labName);
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
        <Button onClick={() => handleClickConfirmMark(mark, lab_name, user_id)}>
          Confirm
        </Button>
      </div>
    </>
  );
};

export default DashboardInfo;
