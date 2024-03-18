import React from "react";

const MainLab = ({
  labName,
  theory,
  practice,
  test,
}: {
  labName: string;
  theory: string;
  practice: string;
  test: string;
}) => {
  return (
    <section className="flex gap-10 p-10 border-x-2 flex-wrap flex-col col-start-2 col-end-8 row-start-2 row-end-3">
      <h1 className="text-5xl font-bold">
        Полимеризация стирола
        <span className="text-5xl font-bold bg-cyan-400 px-2 rounded-xl">
          в блоке
        </span>
      </h1>
      <h2 className="text-3xl font-light">1. Теоретическая часть</h2>
      <p className="pl-7">{theory}</p>
      <h2 className="text-3xl font-light">2. Практическая часть</h2>
    </section>
  );
};

export default MainLab;
