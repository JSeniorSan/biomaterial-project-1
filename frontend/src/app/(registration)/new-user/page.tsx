import Registration from "@/features/registration/pub/registration";
import React from "react";

const NewUser = () => {
  return (
    <section className="h-screen w-full p-3 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold ">Регистрация</h1>
      <Registration />
    </section>
  );
};

export default NewUser;
