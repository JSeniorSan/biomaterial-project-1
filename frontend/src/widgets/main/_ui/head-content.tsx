import React from "react";
import Image from "next/image";
const HeadContent = ({
  page_title,
  chema,
}: {
  page_title: string;
  chema?: string;
}) => {
  return (
    <div>
      <div className="flex gap-10 items-baseline md:flex-row flex-col mb-4">
        <h1 className="text-3xl font-bold">{page_title}</h1>
      </div>
      {chema && (
        <div className="flex flex-col gap-4">
          <div className="text-xl">Схема химической реакции:</div>
          <Image
            src={chema}
            alt={page_title}
            className="rounded shadow-lg"
            width={400}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default HeadContent;
