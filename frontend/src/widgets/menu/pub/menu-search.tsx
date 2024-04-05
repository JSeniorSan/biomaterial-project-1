"use client";
import { Input } from "@/shared/ui/input";
import React from "react";

const MenuSearch = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) => {
  function handleChangeValue(value: string) {
    setQuery(value);
  }
  return (
    <div className="flex flex-col gap-3 justify-center items-start ">
      <h2 className="text-lg font-medium">Поиск по работам:</h2>
      <Input
        type="search"
        value={query}
        onChange={(e) => handleChangeValue(e.currentTarget.value)}
        placeholder="Название работы"
        className="rounded-2xl dark:bg-slate-700 font-light bg-transparent border-2 border-[#5E616A]"
      />
    </div>
  );
};

export default MenuSearch;
