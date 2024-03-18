import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MenuItem = ({
  name,
  secondInfo,
}: {
  name: string;
  secondInfo: { name: string }[];
}) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleClick = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <div className="flex font-bold">
        <Link href={"/main/" + name.split(" ").join("")}>{name}</Link>
        <ChevronRight
          onClick={handleClick}
          className={clsx("transition-all ease-in-out", {
            ["rotate-90 text-cyan-400"]: menuState,
          })}
        />
      </div>
      {menuState && (
        <div className="flex flex-col gap-3 pl-5 border-l-2 border-gray-500">
          {secondInfo.map((item) => {
            return (
              <div
                className="hover:text-gray-300 cursor-pointer transition-colors ease-in-out"
                key={item.name}>
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MenuItem;
