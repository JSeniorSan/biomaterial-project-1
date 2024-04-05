import Image from "next/image";
import React from "react";
import { TheoryInterface } from "../model/types";
import { Card, Typography } from "antd";

const TheoryContent = ({ theoryData }: { theoryData: TheoryInterface }) => {
  const { Paragraph, Title } = Typography;
  return (
    <Card type="inner">
      <Title level={2} id="Теоретическая часть">
        {theoryData?.title}
      </Title>

      {theoryData?.info_block.map((content) => {
        if (content.pic) {
          return (
            <Paragraph key={content.id}>
              {content.value}
              <Image src={content.pic} alt="pic" width={400} height={300} />
            </Paragraph>
          );
        }
        return <Paragraph key={content.id}>{content.value}</Paragraph>;
      })}
    </Card>
  );
};

export default TheoryContent;
