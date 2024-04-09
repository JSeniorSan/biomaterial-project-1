"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";
import { Card, Divider, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const Lab_2 = () => {
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
              Полимеризация стирола в растворе
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
                Полимеризация в растворе позволяет устранить главный недостаток
                блочной полимеризации — местные перегревы, поскольку
                выделяющаяся теплота идет на нагревание и частичное испарение
                растворителя, а также легче отводится вследствие лучшего
                перемешивания менее вязкой реакционной массы.
              </Paragraph>
              <Paragraph className="dark:text-white">
                Так как средняя степень полимеризации образующегося полимера
                пропорциональна концентрации мономера:
              </Paragraph>
              <Image
                src="/Lab2formula.svg"
                alt="sdf"
                width={400}
                height={300}
              />
              <Paragraph className="dark:text-white">
                а при разбавлении растворителем величина [М] уменьшается, то при
                полимеризации в растворе следует ожидать образования полимера с
                меньшей молекулярной массой, чем при осуществлении процесса в
                массе. Одновременно падает и скорость полимеризации.
              </Paragraph>
              <Paragraph className="dark:text-white">
                При полимеризации в растворе средняя степень полимеризации может
                уменьшаться вследствие передачи цепи через растворитель.
              </Paragraph>
              <Paragraph className="dark:text-white">
                Полимеризацию в растворе но радикальному механизму в
                промышленности используют для синтеза поливинилацетата, для
                полимеризации акрилонитрила в N,N-диметилформамиде или водных
                растворах некоторых солей (роданидов). Основной причиной,
                сдерживающей применение полимеризации в растворе (кроме
                отмеченных выше), является необходимость использования
                растворителей (часто высокой чистоты) и их регенерации, а также
                затруднения, возникающие при выделении полимера из раствора.
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
                  <Text type="warning">Исходные вещества:</Text> стирол - 12 мл;
                  динитрил азобисизомаслянной кислоты 1-3 мас. % (по мономеру);
                  толуол; изопропиловый спирт или петролейный эфир - 400-600 мл.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text type="warning">Оборудование:</Text> 4 пробирки с
                  пробками; пипетка; термостат; стакан вместимостью 250 мл;
                  колба коническая вместимостью 250 мл; воронка; складчатые
                  фильтры; чашки Петри.
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
                        Провести полимеризацию стирола при 80°С в течение 4 ч в
                        присутствии 3 мас. % (от мономера)
                        динитрил-азо-бис-изомаслянной кислоты, добавляя в
                        пробирки толуол: в первую - 1 мл, во вторую - 2 мл, в
                        третью - 3 мл и в четвертую - 4 мл.
                      </li>
                      <li className="list-decimal px-5 pt-5">
                        В каждой пробирке определить:
                        <ol className="list-inside list-disc space-y-3 pt-2">
                          <li className="pt-5">выход полимера (в г и %);</li>
                          <li className="pt-5">
                            скорость полимеризации [в %/ч или %/мин и в
                            моль/(л-с)];
                          </li>
                          <li className="pt-5">
                            молекулярную массу полимера вязкозиметрическим
                            методом (<Link href={"/lab_3"}>см. работу 3</Link>).
                          </li>
                        </ol>
                      </li>
                      <li className="list-decimal px-5 pt-5">
                        Полученные результаты занести в табл. 1 и 2 и построить
                        графики зависимости скорости полимеризации и
                        молекулярной от количества растворителя.
                      </li>
                      <li className="list-decimal px-5 pt-5">
                        Сделать выводы о влиянии исследуемого фактора на процесс
                        полимеризации мономера.
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

export default Lab_2;
