"use client";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEventHandler, useState } from "react";

const MenuItem = ({
  name,
  secondInfo,
  title,
}: {
  name: string;
  secondInfo: { name: string }[];
  title: string;
}) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const pathname = usePathname();

  const handleClick: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    setMenuState(!menuState);
  };

  const handleClickNavigateTo = (name: string) => {
    document.getElementById(name)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <>
      <div className="flex font-bold flex-col">
        <div
          className={clsx("flex", {
            ["text-sky-800"]:
              pathname.split("/")[2] === name.split(" ").join(""),
          })}>
          <Link href={"/main/" + name.split(" ").join("")}>{name}</Link>
          <ChevronRight
            onClick={handleClick}
            className={clsx("transition-all ease-in-out", {
              ["rotate-90 text-sky-800"]: menuState,
            })}
          />
        </div>
        <span className="text-sm text-gray-500">{title}</span>
      </div>
      {menuState && (
        <div className="flex flex-col gap-3 pl-5 border-l-2 border-gray-500">
          {secondInfo.map((item) => {
            return (
              <div
                className="hover:text-gray-300 cursor-pointer transition-colors ease-in-out"
                key={item.name}
                onClick={() => handleClickNavigateTo(item.name)}>
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
