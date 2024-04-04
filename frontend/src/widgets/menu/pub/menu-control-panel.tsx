"use client";

import { Badge } from "@/shared/ui/badge";
import { motion } from "framer-motion";
import React from "react";

const MenuControlPanel = () => {
  const handleClickNavigateTo = (name: string) => {
    document.getElementById(name)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <motion.div
      className="flex flex-col gap-3 justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="control">
      <b className="align-self-center  text-xl">Навигация:</b>
      <Badge
        onClick={() => handleClickNavigateTo("Теоретическая часть")}
        variant={"outline"}
        className="text-lg cursor-pointer">
        Теоретическая часть
      </Badge>
      <Badge
        variant={"outline"}
        onClick={() => handleClickNavigateTo("Практическая часть")}
        className="text-lg cursor-pointer">
        Практическая часть
      </Badge>
    </motion.div>
  );
};

export default MenuControlPanel;
