"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";
import { Button, Card, Divider, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import Table_2 from "@/app/(privat)/table2/_table";

const Lab_1 = () => {
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
            <Title className="dark:text-white">
              Полимеризация стирола в блоке
            </Title>
            <Card
              type="inner"
              className=" dark:bg-[var(--header-bg-color)] dark:border-gray-600 dark:shadow-lg dark:shadow-slate-800">
              <Title
                level={2}
                id="Теоретическая часть"
                className="dark:text-white">
                <pre>Теоретическая часть</pre>
              </Title>

              <Paragraph className="dark:text-white">
                Полимеризация в массе (в блоке) — простейший способ
                полимеризации чистого мономера, при котором не происходит
                загрязнения образующегося полимера побочными продуктами. Однако
                вследствие сильного повышения вязкости реакционной системы уже
                на ранних стадиях процесса и его экзотермичности, а также из-за
                автоускорения (гель-эффект) сильно затруднен отвод теплоты из
                зоны реакции. В результате даже при незначительном объеме
                полимеризуемого мономера могут возникать локальные перегревы,
                которые приводят к деструкции полимера, его потемнению и
                изменению других свойств. Кроме того, возрастает роль реакций
                передачи цепи на полимер, что вместе с деструктивными процессами
                способствует формированию более широкого молекулярно-массового
                распределения.
              </Paragraph>
              <Paragraph className="dark:text-white">
                Поэтому полимеризацию в массе применяют ограниченно при
                полимеризации этилена, стирола и метилметакрилата. Так,
                полимеризацию этилена под давлением 100—300 МПа и температуре
                190-250°С проводят в реакторах трубчатого типа с конверсией
                мономера за один цикл 18-20%.
              </Paragraph>
              <Paragraph className="dark:text-white">
                При полимеризации стирола и метилметакрилата отвод теплоты
                осуществляют в две стадии: сначала при обычных условиях (80°С)
                проводят полимеризацию мономеров в массе до степени превращения
                в полимер 20-40%, получая форполимер — раствор полимера в
                мономере. В случае полистирола вторую стадию проводят в колоннах
                непрерывного действия с постепенным повышением температуры
                сверху вниз и выгрузкой готового полимера снизу; конверсия при
                этом достигает 98-100%. Частично заполимеризованный
                метилметакрилат заливают в формы и полимеризуют с постепенным
                повышением температуры, получая изделия заданной формы.
              </Paragraph>
            </Card>
            <Divider className="dark:bg-white" />
            <Space direction="vertical" size={20}>
              <Card className="dark:bg-[var(--header-bg-color)] dark:border-gray-600 dark:shadow-lg dark:shadow-slate-800">
                <Title
                  level={2}
                  id="Практическая часть"
                  className="dark:text-white">
                  <pre>Практическая часть</pre>
                </Title>
                <Image
                  src="/Lab1and2pic1.svg"
                  alt="df"
                  width={400}
                  height={200}
                />
                <Paragraph className="dark:text-white">
                  <Text type="warning">Исходные вещества:</Text> стирол - 9-10
                  г; динитрил азобисизомаслянной кислоты; толуол 80-100 мл;
                  изопропиловый спирт или петролейный эфир - 400-600 мл.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text type="warning">Оборудование:</Text> 4 пробирки с
                  пробками; пипетка; термостат; стакан вместимостью 250 мл;
                  колба коническая вместимостью 250 мл; воронка; складчатые
                  фильтры; чашки Петри.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  В четыре пробирки загружают указанное в задании количество
                  инициатора и по 2 г стирола. Пробирки закрывают стеклянными
                  пробками с подложенными в шлифы бумажками или резиновыми
                  пробками, обернутыми полиэтиленовой пленкой или фольгой. После
                  растворения инициатора пробирки помещают в термостат с
                  заданной температурой и выдерживают необходимое время. По
                  окончании полимеризации охлажденные пробирки открывают,
                  полимер растворяют в двукратном избытке толуола и осаждают в
                  изопропанол или петролейный эфир, взятые в четырехкратном
                  избытке относительно раствора полимера.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Полимер отфильтровывают на взвешенном складчатом фильтре
                  (массу фильтра записывают на нем простым карандашом),
                  промывают осадителем и сушат в предварительно взвешенных
                  чашках Петри на воздухе до постоянной массы.
                </Paragraph>
                <Title level={3} className="dark:text-white">
                  <pre>Задание:</pre>
                </Title>
                <Paragraph className="dark:text-white">
                  <Space direction="vertical" size={16}>
                    <ol className="list-decimal px-5 space-y-5">
                      <li className="list-decimal px-5 pt-5">
                        Провести полимеризацию стирола в условиях одного из
                        следующих вариантов:
                        <ol className="list-inside list-disc space-y-3 pt-2">
                          <li className="pt-5">
                            температура 60, 70, 80 и 90°С, количество инициатора
                            0,5 мас. % (от мономера); продолжительность 4 ч;
                          </li>
                          <li className="pt-5">
                            температура 80°С; количество инициатора 0,1; 0,3;
                            0,5 и 0,7 мас. % (от мономера); продолжительность 3
                            или 4 ч;
                          </li>
                          <li className="pt-5">
                            температура 80°С; количество инициатора 0,5 мас. %
                            (от мономера); продолжительность 1, 2, 3 и 4 ч.
                          </li>
                        </ol>
                      </li>
                      <li className="list-decimal px-5 pt-5">
                        В каждой пробирке определить:
                        <ol className="list-inside list-disc space-y-3 pt-2">
                          <li className="pt-5">выход полимера (в г и %);</li>
                          <li className="pt-5">
                            скорость полимеризации [в %/ч или %/мин и в
                            моль/(л·с)];
                          </li>
                          <li className="pt-5">
                            молекулярную массу полимера вязкозиметрическим
                            методом (<Link href={"/lab_3"}>см. работу 3</Link>).
                          </li>
                        </ol>
                      </li>
                      <li className="list-decimal px-5 pt-5">
                        Полученные результаты занести в табл. 1 и построить
                        графики зависимости скорости полимеризации и
                        молекулярной массы от исследуемого фактора.
                      </li>
                      <li className="list-decimal px-5 pt-5">
                        Сделать выводы о влиянии исследуемого фактора на процесс
                        полимеризаци мономера.
                      </li>
                    </ol>
                  </Space>
                </Paragraph>
              </Card>
              <Table_2 />
              <Button>Сдать работу</Button>
            </Space>
          </Space>
        </Typography>
      </motion.section>
    </AnimatePresence>
  );
};

export default Lab_1;
