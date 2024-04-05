import React from "react";
import Image from "next/image";
import { Space, Typography } from "antd";
const HeadContent = ({
  page_title,
  chema,
}: {
  page_title: string;
  chema?: string;
}) => {
  const { Title } = Typography;

  return (
    <Space direction="vertical" size={16}>
      <Title className="dark:text-white">{page_title}</Title>
      {chema && (
        <div className="flex flex-col gap-4">
          <Title level={3} className="dark:text-white">
            Схема химической реакции:
          </Title>
          <Image
            src={chema}
            alt={page_title}
            width={400}
            height={200}
            placeholder={"blur"}
            blurDataURL={chema}
          />
        </div>
      )}
    </Space>
  );
};

export default HeadContent;
