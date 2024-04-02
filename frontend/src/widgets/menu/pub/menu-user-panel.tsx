import React from "react";

const MenuUserPanel = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-11 h-11 bg-slate-50 rounded-full border border-[#5E616A]"></div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div>Имя</div>
          <div>Фамилия</div>
        </div>
        <div>Группа</div>
      </div>
    </div>
  );
};

export default MenuUserPanel;
