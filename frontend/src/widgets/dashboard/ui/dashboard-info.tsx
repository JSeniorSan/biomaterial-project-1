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

const DashboardInfo = ({ lab_name, setGetWork, user_id }: InfoProps) => {
  const [mark, setMark] = useState<string>("");
  const handleClickConfirmMark = async (
    labName: string,
    mark: string,
    userId: string
  ) => {
    try {
      await SummaryService.sendMark(labName, mark, userId);
      setGetWork("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h3 className="p-3">Результаты:</h3>
        <Table_2 type="view" user_id={user_id} role="teacher" />
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
