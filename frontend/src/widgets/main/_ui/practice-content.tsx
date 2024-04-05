import React from "react";
import { PRACTICE_PAGE_DATA } from "../model/page-data";
import { Card, Space, Typography } from "antd";

const PracticeContent = ({ title }: { title: string }) => {
  const { Paragraph, Text, Title } = Typography;
  return (
    <Space direction="vertical" size={20}>
      <Card>
        <Title level={2} id="Практическая часть">
          {title}
        </Title>
        <Paragraph>
          <Space direction="vertical" size={16}>
            <ol className="list-decimal px-5">
              {PRACTICE_PAGE_DATA[0].info_block.map((list_item) => {
                return (
                  <li className="list-decimal px-5 pt-5" key={list_item.id}>
                    {list_item.value.title}
                    <Space direction="vertical" size={16}>
                      <ol className="list-inside list-disc space-y-3 pt-2">
                        {list_item.value.list.map((item, i) => {
                          return (
                            <li key={i} className="pt-5">
                              {item}
                            </li>
                          );
                        })}
                      </ol>
                    </Space>
                  </li>
                );
              })}
            </ol>
          </Space>
        </Paragraph>
      </Card>
    </Space>
  );
};

export default PracticeContent;
