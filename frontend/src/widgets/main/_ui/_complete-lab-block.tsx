"use client";
import { UsersService } from "@/entities/services/labs/users-service";
import { Alert, Button } from "antd";
import React, { useState } from "react";

const CompleteLabBlock = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const handeleDoneWork = async () => {
    try {
      setIsLoading(true);
      const response = await UsersService.getCurrentUser();
      const data = response.data;
      console.log("resp1", response);
      //   const response2 = await LabsService.(data.user_id);
      //   console.log("resp2", response2);
      setIsLoading(false);
      setIsComplete(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isComplete ? (
        <Alert
          message="Вы успешно отправили данные на проверку! Спасибо🔥"
          type="success"
        />
      ) : (
        <Button onClick={handeleDoneWork} disabled={isLoading}>
          Сдать работу
        </Button>
      )}
    </div>
  );
};

export default CompleteLabBlock;
