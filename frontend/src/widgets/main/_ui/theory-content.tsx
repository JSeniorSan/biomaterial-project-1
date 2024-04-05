import Image from "next/image";
import React from "react";
import { TheoryInterface } from "../model/types";
import { Card, Typography } from "antd";

const TheoryContent = ({ theoryData }: { theoryData: TheoryInterface }) => {
  const { Paragraph, Title } = Typography;
  return (
    <Card
      type="inner"
      className=" dark:bg-[var(--header-bg-color)] dark:border-gray-600 dark:shadow-lg dark:shadow-slate-800">
      <Title level={2} id="Теоретическая часть" className="dark:text-white">
        {theoryData?.title}
      </Title>

      {theoryData?.info_block.map((content) => {
        if (content.pic) {
          return (
            <Paragraph key={content.id} className="dark:text-white">
              {content.value}
              <Image src={content.pic} alt="pic" width={400} height={300} />
            </Paragraph>
          );
        }
        return (
          <Paragraph key={content.id} className="dark:text-white">
            {content.value}
          </Paragraph>
        );
      })}
    </Card>
  );
};

export default TheoryContent;
