"use client";

import { Card } from "@/shared/ui/card";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = ({ id, title }: { id: number; title: string }) => {
  const pathname = usePathname();

  return (
    <Card
      className={clsx(
        "flex text-center text-white bg-[var(--active-state-menu-color)]  w-52 text-pretty p-3 flex-nowrap hover:scale-x-105 transition-all ease-in-out shadow-lg hover:bg-gray-400 text-ellipsis",
        {
          ["text-white"]: Number(pathname.at(-1)) === id,
        }
      )}>
      <Link href={"/" + id} className="text-ellipsis w-full">
        {title}
      </Link>
    </Card>
  );
};

export default MenuItem;
