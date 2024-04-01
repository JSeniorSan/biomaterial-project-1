import React from "react";
import styles from "./style.module.scss";
import HeadContent from "../_ui/head-content";
import TheoryContent from "../_ui/theory-content";
import { PAGE_DATA } from "../model/page-data";
const MainLab = () => {
  return (
    <section className={styles.lab}>
      <HeadContent
        chema={"/chemical-reaction-1.png"}
        page_title="Полимеризация стирола в блоке"
      />

      <TheoryContent theoryData={PAGE_DATA[0]} />

      <h2 className="text-2xl font-light" id="Практическая часть">
        2. Практическая часть
      </h2>

      <ol className="list-decimal space-y-5 px-5 ">
        <li>
          Провести полимеризацию стирола в условиях одного из следующих
          вариантов:
          <ol className="list-inside list-disc space-y-3 pt-2">
            <li>
              Tемпература 60, 70, 80 и 90 °С, количество инициатора 0,5 мас. %
              (от мономера); продолжительность 4 ч;
            </li>
            <li>
              Температура 80 °С; количество инициатора 0,1; 0,3; 0,5 и 0.7мас. %
              (от мономера); продолжительность 3 или 4 ч;
            </li>
            <li>
              Температура 80 °С; количество инициатора 0,5 мас. % (от мономера);
              продолжительность 1, 2, 3 и 4 ч.
            </li>
          </ol>
        </li>
        <li>
          В каждой пробирке определить:
          <ol className="list-inside list-disc space-y-3 pt-2">
            <li>Выход полимера (в г и %);</li>
            <li>Скорость полимеризации [в %/ч или %/мин и в моль/(л·с)];</li>
            <li>
              Молекулярную массу полимера вязкозиметрическим методом (см. работу
              3).
            </li>
          </ol>
        </li>
      </ol>

      <div className="border"></div>
    </section>
  );
};

export default MainLab;
