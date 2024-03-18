"use client";
import MainLab from "@/widgets/main/pub/main-lab-1";
import React, { Suspense } from "react";

const LabContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLab />
    </Suspense>
  );
};

export default LabContent;
