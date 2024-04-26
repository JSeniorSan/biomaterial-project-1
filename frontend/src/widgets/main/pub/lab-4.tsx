"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";
import { Card, Divider, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const Lab_4 = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <AnimatePresence>
      <motion.section
        className={styles.lab}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}>
        <Typography>
          <Space direction="vertical" size={16}>
            <Title className="dark:text-white text-wrap">
              Получение линейных полиэфиров (изучение кинетики процесса
              поликонценсации)
            </Title>

            <Space direction="vertical" size={20}>
              <Card className="dark:bg-[var(--header-bg-color)] dark:border-gray-600 dark:shadow-lg dark:shadow-slate-800">
                <pre>
                  <Title
                    level={2}
                    id="Практическая часть"
                    className="dark:text-white">
                    Практическая часть
                  </Title>
                </pre>

                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Исходные вещества:
                  </Text>{" "}
                  этиленгликоль, дикарбоновая(ые) кислота(ы) и/или ее ангидрид
                  (по заданию), ацетон 100 мл; КОН 0,1 н спиртовой раствор;
                  фенолфталеин 1 %-ный спиртовой раствор.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Оборудование:
                  </Text>{" "}
                  трехгорлая грушевидная колба вместимостью 250 мл,
                  верхнеприводная мешалка, прибор Дина-Старка, обратный
                  холодильник, масляная баня или баня со сплавом Вуда,
                  стеклянная палочка, пипетка на 20 мл, термостат, колбы
                  конические вместимостью 50 мл, бюретка, фарфоровая чашка.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  В трехгорлую колбу загружают ангидрид и/или дикарбоновую
                  кислоту и этиленгликоль, и после сборки прибора (рис. 3)
                  содержимое колбы при перемешивании постепенно нагревают на
                  масляной бане или бане со сплавом Вуда до 185-195 °С.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Для определения кинетики процесса поликонденсации через каждые
                  30 мин после достижения указанной температуры в предварительно
                  взвешенную колбу отбирают пробу (примерно 0,3 0,4 г с
                  точностью до 0,0002 г). Массу навески рассчитывают по разнице
                  масс чистой колбы и колбы с веществом. Пробу отбирают
                  стеклянной палочкой погружением ее в реакционную смесь,
                  остановив предварительно мешалку. Пробу в коническую колбу
                  необходимо помещать так, чтобы вещество не попадало на шлиф и
                  стенки колбы, а исключительно на ее дно. Затем добавляют 15-30
                  мл растворителя и после растворения навески титруют из
                  микробюретки 0,1 н раствором щелочи в присутствии
                  фенолфталеина до появления розовой окраски. Параллельно
                  проводят контрольный опыт с тем же количеством растворителя.
                  Каждый раз после измерения аналитическую колбу моют, сушат в
                  термошкафу и охлаждают, ее масса должна быть постоянной.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Поликонденсацию прекращают, когда кислотное число достигнет
                  30-40. Одновременно с отбором проб отмечают количество воды,
                  выделившейся в приборе Дина-Старка (рис. 3). По полученным
                  значениям кислотного числа рассчитывают молекулярную массу
                  полимера и количество выделившейся воды. Разогретый полиэфир
                  выливают из колбы в фарфоровую чашку.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Кислотное число — это масса КОН (в мг), которая необходима для
                  нейтрализации кислотных групп, содержащихся в 1 г
                  анализируемого вещества. Кислотное число (КЧ) рассчитывают по
                  формуле:
                  <Image
                    src={"/Lab4formula1.pdf.svg"}
                    alt="f1"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </Paragraph>
                <Paragraph className="dark:text-white">
                  где V1 и V2 - объемы раствора щелочи с нормальностью N,
                  израсходованные на титрование анализируемой и контрольной
                  пробы соответственно, мл; g ¬ навеска олигомера, г.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Примечание:{" "}
                  </Text>
                  <blockquote>
                    для титрования можно применять 0,1 н раствор NaOH, но в в
                    расчетную формулу следует ставить титр раствора КОН той же
                    нормальности.
                  </blockquote>

                  <div className="w-full flex justify-center flex-col items-center">
                    <Image
                      src={"/Lab4_scema.svg"}
                      alt="schema"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto"
                    />
                    <Text className=" dark:text-white">
                      Рис. 3. Прибор для получения полиэфира
                    </Text>
                  </div>
                </Paragraph>
                <Title level={3} className="dark:text-white">
                  Определение молекулярной массы линейвых полиэфиов
                </Title>
                <Paragraph className="dark:text-white">
                  Молекулярную массу полиэфиров линейного строения можно
                  определить по кислотному числу:
                  <Image
                    src={"/Lab4formula2.pdf.svg"}
                    alt="f2"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Теоретическое кислотное число (или начальное кислотное число
                  исходной реакционной смеси) рассчитывают из соотношения
                  компонентов и их молекулярной массы:
                  <Image
                    src={"/Lab4formula3.pdf.svg"}
                    alt="f3"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                  <Text className="dark:text-white">
                    где M<sub>Σ</sub> суммарная молекулярная масса исходной
                    смеси.
                  </Text>
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Примечание:
                  </Text>{" "}
                  <blockquote>
                    при расчете КЧ<sub>теор</sub> в знаменатель следует ставить
                    суммарную молекулярную массу реакционной смеси M<sub>Σ</sub>
                    , соответствующую рецептуре, в которую входит 1 моль
                    кислотных реагентов. Если в знаменатель ставится суммарная
                    молекулярная масса реакционной смеси, в которой содержание
                    кислотных реагентов больше или меньше, чем 1 моль, то в
                    числитель следует ввести соответствующий коэффициент. Так,
                    если загружается в сумме 1,5 моль кислотных реагентов, то в
                    числитель следует ввести коэффициент 1,5; если загружается
                    0,35 моль. соответственно, 0,35.
                  </blockquote>
                </Paragraph>
                <Title level={3} className="dark:text-white">
                  Определение выхода полиэфира и количества выделившейся воды
                </Title>
                <Paragraph className="dark:text-white">
                  Из возможных уравнений реакций следует, что на моль ангидрида
                  дикарбоновой кислоты, вступившего в реакцию поликонденсации,
                  выделяется 1 моль воды, а на 1 моль дикарбоновой кислоты
                  выделяется 2 моль воды. Тогда количество воды Х, выделившейся
                  в процессе получения полиэфира с определенным кислотным числом
                  КЧ<sub>эф</sub> будет равно:
                  <Image
                    src={"/Lab4formula4.pdf.svg"}
                    alt="f4"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </Paragraph>
                <Paragraph className="dark:text-white">
                  где n число молей ангидрида дикарбоновой кислоты; m число
                  молей дикарбоновой кислоты.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Выход полиэфира можно определить по разности загрузки
                  компонентов и количества выделившейся воды
                </Paragraph>
                <Title level={3} className="dark:text-white">
                  {" "}
                  <pre>Задание:</pre>
                </Title>
                <Paragraph className="dark:text-white">
                  <Space direction="vertical" size={16}>
                    <ol className=" px-5 space-y-5">
                      <li className=" pt-5">
                        Рассчитать количество реагентов (в г) в соответствии с
                        заданной рецептурой (табл. 6) исходя из 0.15-0,25 моль
                        этиленгликоля.
                      </li>
                      <li className=" pt-5">
                        Написать схему реакции поликонденсации.
                      </li>
                      <li className=" pt-5">
                        Снять кинетику процесса поликонденсации.
                      </li>
                      <li className=" pt-5">
                        Определить выход полиэфира (в г и мас. %) по результатам
                        взвешивания и по кислотному числу (КЧ).
                      </li>
                      <li className=" pt-5">
                        Полученные результаты занести в табл. 7. Построить
                        график зависимости кислотного числа, молекулярной массы
                        и количества выделившейся воды от продолжительности
                        поликонденсации.
                      </li>
                    </ol>
                  </Space>
                </Paragraph>
              </Card>
            </Space>
          </Space>
        </Typography>
      </motion.section>
    </AnimatePresence>
  );
};

export default Lab_4;
