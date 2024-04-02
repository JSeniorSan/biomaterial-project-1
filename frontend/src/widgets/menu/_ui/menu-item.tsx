"use client";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEventHandler, useState } from "react";

const MenuItem = ({ id, title }: { id: number; title: string }) => {
  // const [menuState, setMenuState] = useState<boolean>(false);
  const pathname = usePathname();

  // const handleClick: MouseEventHandler<SVGElement> = (e) => {
  //   e.stopPropagation();
  //   setMenuState(!menuState);
  // };

  // const handleClickNavigateTo = (name: string) => {
  //   document.getElementById(name)?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "nearest",
  //   });
  // };

  return (
    <div className="flex font-bold flex-col h-fit rounded-xl p-2 max-w-52  flex-wrap bg-[var(--active-state-menu-color)] hover:bg-gray-300 hover:scale-x-105 transition-all ease-in-out ">
      <div
        className={clsx("flex w-full text-center text-white", {
          ["text-gray-500"]: Number(pathname.at(-1)) === id,
        })}>
        <Link href={"/" + id}>{title}</Link>
      </div>
    </div>
  );
};

export default MenuItem;
