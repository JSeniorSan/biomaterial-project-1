"use client";
import { checkAuthHoc } from "@/entities/services/auth/hoc";
import Lab_3 from "@/widgets/main/pub/lab-3";
import React from "react";

const Lab = () => {
  return <Lab_3 />;
};

export default checkAuthHoc(Lab);
