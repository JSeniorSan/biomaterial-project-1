"use client";
import { SummaryService } from "@/entities/services/labs/summary-service";
import { Alert, Button } from "antd";
import React, { useState } from "react";

const CompleteLabBlock = ({
  setPassed,
}: {
  setPassed: (value: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handeleDoneWork = async () => {
    try {
      setIsLoading(true);
      const response = await SummaryService.changeStatus(
        "styrol_polymerization_bulk"
      );
      console.log("resp", response);
      setIsLoading(false);
      setIsComplete(true);
      setPassed(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isComplete ? (
        <div className="flex flex-col gap-4">
          <Alert
            message="Вы успешно отправили данные на проверку🔥"
            type="success"
          />
          <Alert
            message={
              "Посмотреть результаты можете у себя в профиле после проверки преподавателем."
            }
            type="info"
          />
        </div>
      ) : (
        <Button onClick={handeleDoneWork} disabled={isLoading}>
          Сдать работу
        </Button>
      )}
    </div>
  );
};

export default CompleteLabBlock;
