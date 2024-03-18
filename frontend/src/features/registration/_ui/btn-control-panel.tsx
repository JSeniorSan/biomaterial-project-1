import { Button } from "@/shared/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const BtnControlPanel = () => {
  return (
    <div className="flex gap-5 justify-center items-center pt-5">
      <Link href="/">
        <ArrowLeft size="40px" />
      </Link>
      <Button
        type="submit"
        className="bg-[#F2E3D5] w-40 text-black font-semibold text-md hover:bg-gray-500 rounded-xl p-5 dark:bg-[#F3ECC8]"
      >
        Создать аккаунт
      </Button>
    </div>
  );
};

export default BtnControlPanel;
