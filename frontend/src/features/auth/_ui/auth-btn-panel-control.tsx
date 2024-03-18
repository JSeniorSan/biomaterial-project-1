import { Button } from "@/shared/ui/button";
import Link from "next/link";
import React from "react";

const AuthBtnPanelControl = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-60 h-[38.25px] rounded-lg  bg-[#756C83] mt-10 md:w-96 dark:bg-[#BDB79A]">
          <Button
            type="submit"
            className="bg-[#F2E3D5] w-60 text-[#1B2B1B] font-bold text-md hover:bg-white -translate-x-[3px] -translate-y-[3px] md:w-96 dark:bg-[#F3ECC8]">
            Вход
          </Button>
        </div>

        <p className="text-[#090213] dark:text-[#F3ECC8]">Не помню пароль</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Link href="/new-user">
          <p className="text-[#090213] dark:text-[#F3ECC8]">
            Нет учетной записи?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AuthBtnPanelControl;
