import Image from "next/image";
import React from "react";

const MainLab = ({}: {}) => {
  return (
    <section className="flex gap-10 p-10  flex-wrap flex-col col-start-2 col-end-8 row-start-2 row-end-10">
      <h1 className="text-5xl font-bold">Полимеризация стирола в блоке</h1>

      <label className="text-3xl">Схема химической реакции:</label>

      <Image
        src="/chemical-reaction-1.png"
        alt="Схема реакции полимеризация стирола в блоке"
        width={500}
        height={400}
        className="rounded shadow-lg"
      />

      <h2 className="text-3xl font-light">1. Теоретическая часть</h2>

      <p className="pl-7">
        Исходные вещества: стирол - 9-10 г; пероксид бензоила или динитрил
        азо-бис-изомаслянной кислоты (по заданию); толуол 80-100 мл;
        изопропиловый спирт или петролейный эфир - 400--600 мл.
      </p>
      <p className="pl-7">
        Оборудование: 4 пробирки с пробками; пипетка; термостат; стакан
        вместимостью 250 мл; колба коническая вместимостью 250 мл; воронка;
        складчатые фильтры; чашки Петри.
      </p>
      <p className="pl-7">
        В четыре пробирки загружают указанное в задании количество инициатора и
        по 2 г стирола (см. Приложение 1). Пробирки закрывают стеклянными
        пробками с подложенными в шлифы бумажками или резиновыми пробками,
        обернутыми полиэтиленовой пленкой или фольгой. После растворения
        инициатора пробирки помещают в термостат с заданной температурой и
        выдерживают необходимое время. По окончании полимеризации охлажденные
        пробирки открывают, полимер растворяют в двукратном избытке толуола и
        осаждают в изопропанол или петролейный эфир, взятые в четырехкратном
        избытке относительно раствора полимера.
      </p>
      <p className="pl-7">
        Полимер отфильтровывают на взвешенном складчатом фильтре (массу фильтра
        записывают на нем простым карандашом), промывают осадителем и сушат в
        предварительно взвешенных чашках Петри на воздухе до постоянной массы.
      </p>

      <h2 className="text-3xl font-light">2. Практическая часть</h2>

      <ol className="list-decimal space-y-5 pl-7">
        <li>
          Провести полимеризацию стирола в условиях одного из следующих
          вариантов:
          <ol className="list-inside list-disc space-y-3 pt-3">
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
          <ol className="list-inside list-disc space-y-3 pt-3">
            <li>Выход полимера (в г и %);</li>
            <li>Скорость полимеризации [в %/ч или %/мин и в моль/(л·с)];</li>
            <li>
              Молекулярную массу полимера вязкозиметрическим методом (см. работу
              3).
            </li>
          </ol>
        </li>
      </ol>

      <div className="border">{/* table */}</div>
    </section>
  );
};

export default MainLab;
