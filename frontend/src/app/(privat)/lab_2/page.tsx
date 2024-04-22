"use client";
import { checkAuthHoc } from "@/entities/services/auth/hoc";
import Lab_2 from "@/widgets/main/pub/lab-2";
import React from "react";

const Lab_1 = () => {
  return <Lab_2 />;
};

export default checkAuthHoc(Lab_1);
