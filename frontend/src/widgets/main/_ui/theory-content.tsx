import Image from "next/image";
import React from "react";
import { TheoryInterface } from "../model/types";

const TheoryContent = ({ theoryData }: { theoryData: TheoryInterface }) => {
  return (
    <>
      <h2 className="text-2xl font-light" id="Теоретическая часть">
        {theoryData?.title}
      </h2>
      <div className="flex flex-col gap-5">
        {theoryData.info_block.map((content) => {
          if (content.pic) {
            return (
              <div key={content.id} className="flex flex-col gap-3">
                <p key={content.id}>{content.value}</p>
                <Image src={content.pic} alt="pic" width={400} height={300} />
              </div>
            );
          }
          return <p key={content.id}>{content.value}</p>;
        })}
      </div>
    </>
  );
};

export default TheoryContent;
