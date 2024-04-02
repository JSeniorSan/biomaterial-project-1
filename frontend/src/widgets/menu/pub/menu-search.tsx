import { Input } from "@/shared/ui/input";
import React from "react";

const MenuSearch = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-start ">
      <label>Поиск по работам:</label>
      <Input
        type="search"
        placeholder="Название работы"
        className="rounded-2xl dark:bg-slate-700 font-light bg-transparent border-2 border-[#5E616A]"
      />
    </div>
  );
};

export default MenuSearch;
