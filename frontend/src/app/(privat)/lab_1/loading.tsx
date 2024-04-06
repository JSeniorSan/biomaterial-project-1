import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="absolute right-1/3 top-80 text-3xl">
      <Spin />
    </div>
  );
};

export default Loading;
