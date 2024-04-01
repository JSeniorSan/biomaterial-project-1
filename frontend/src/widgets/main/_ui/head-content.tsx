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
      <div className="flex gap-10 items-baseline md:flex-row flex-col">
        <h1 className="text-3xl font-bold">{page_title}</h1>
        <button className="p-5 text-lg font-semibold text-white bg-[var(--active-state-menu-color)] rounded-2xl w-fit text-center hover:bg-[var(--header-bg-color)] shadow-lg transition-colors ease-in-out">
          Сдать работу
        </button>
      </div>
      <label className="text-xl">Схема химической реакции:</label>
      {chema && (
        <Image
          src={chema}
          alt={page_title}
          className="rounded shadow-lg"
          width={400}
          height={300}
        />
      )}
    </div>
  );
};

export default HeadContent;
