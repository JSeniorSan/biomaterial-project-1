import React from "react";
import { PRACTICE_PAGE_DATA } from "../model/page-data";

const PracticeContent = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="text-2xl font-light" id="Практическая часть">
        {title}
      </h2>
      <ol className="list-decimal space-y-5 px-5 ">
        {PRACTICE_PAGE_DATA[0].info_block.map((list_item) => {
          return (
            <li className="list-decimal space-y-5 px-5 " key={list_item.id}>
              {list_item.value.title}
              <ol className="list-inside list-disc space-y-3 pt-2">
                {list_item.value.list.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default PracticeContent;
