"use client";

import { checkAuthHoc } from "@/entities/services/auth/hoc";
import Lab_1 from "@/widgets/main/pub/lab-1";
import React from "react";

const Lab = () => {
  return <Lab_1 />;
};

export default checkAuthHoc(Lab);
