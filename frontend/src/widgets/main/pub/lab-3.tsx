"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";
import { Card, Divider, Space, Typography } from "antd";
import Image from "next/image";

const Lab_3 = () => {
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
              Вискозиметрический метод определения молекулярной массы полимера
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

              <Title level={3} className="dark:text-white">
                Вискозиметры.
              </Title>

              <Paragraph className="dark:text-white">
                Наибольшее распространение для определения вязкости растворов
                полимеров получили капиллярные вискозиметры Оствальда и
                Уббелоде. Вискозиметры Оствальда (рис. 1а) применяют для
                определения вязкости при одной концентрации. Если необходимо
                установить. значение вязкости при различных концентрациях (с
                разбавлением исходного раствора), измерения удобнее проводить в
                вискозиметре Уббелоде (рис. 1б, в). Введение третьей трубки
                прерывает поток раствора в конце капилляра (создается так
                называемый «подвесной» уровень), поэтому время истечения
                жидкости не зависит от уровня раствора в шарике 6
              </Paragraph>
              <Paragraph className="dark:text-white">
                При использовании вискозиметра Оствальда необходимо заливать
                строго одинаковые количества раствора (или растворителя), чтобы
                уровень eгo в шарике был всегда один и тот же. В случае
                применения вискозиметра Уббелоде это условие необязательно,
                поэтому разбавление раствора можно проводить непосредственно в
                вискозиметре.
              </Paragraph>
              <Paragraph className="dark:text-white text-center">
                <div className="w-full flex justify-center">
                  <Image
                    src="/viscozimeters.svg"
                    alt="sdf"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>

                <Text className="dark:text-white">
                  Определение вязкости растворов с применением вискозиметров
                  Оствальда и Уббелоде, изображенных на рис. 1 а, б, требует
                  значительного количества вещества, в то время как
                  использование видоизмененного вискозиметра Уббелоде (рис. 1в)
                  позволяет обойтись небольшой навеской полимера (около 50 мг).
                </Text>
              </Paragraph>

              <Paragraph className="dark:text-white">
                Для уменьшения ошибок при измерениях необходимо при изготовлении
                визкозиметров Уббелоде с подвесным уровнем (рис. 1 в) соблюдать
                указанные ниже основные размеры и придерживаться предлагаемых
                рекомендаций. Длина капилляра 8 составляет 80-120 мм. Диаметр
                капилляра подбирается с таким расчетом, чтобы время истечения
                растворителя было не менее 100 или не более 200 с. Вместимость
                нижнего конусообразного резервуара 1 равна 30 50 мл (в
                зависимости от желаемого диапазона концентраций). Нижний конец
                трубки 3, через которую засасывается раствор или растворитель,
                расположен на расстоянии не более 2-3 мм от дна резервуара 1 (в
                случае наличия двух, верхнего и нижнего, шариков их вместимости
                примерно равны I мл). Диаметр широкой трубки 2 составляет 12-14
                мм; диаметры 3 и 4 трубок - 5-6 мм. Общая высота вискозиметра
                200-250 мм. Метку 7 наносят на верхней расширенный участок
                капилляра, диаметр расширенной части обычно в 2 раза больше
                внутреннего диаметра самого капилляра, но не более 1,3 и не
                менее 0,6 мм. Длина расширенной части 8-10 мм. Метку 5 наносят
                на сужении всасывающей трубки 3. Диаметр суженной части 5 должен
                быть больше, чем диаметр расширенной части капилляра 3 на 30-50
                %.
              </Paragraph>
              <Paragraph className="dark:text-white">
                <Text strong type="warning">
                  Термостат.
                </Text>{" "}
                При измерениях вязкости необходимо поддерживать постоянную
                температуру с точностью ± 0,01°С. Если вязкость измеряю при
                невысоких температурах, термостат можно заполнять
                дистиллированной водой, при высоких глицерином или силиконовым
                маслом. Термостат должен быть снабжен мешалкой, нагревателем и
                приспособлением для укрепления вискозиметра. Температуру воды в
                термостате устанавливают и поддерживают с помощью контактного
                термометра, включенного в цепь электронного реле. В качестве
                термостата может быть использован большой стакан (объемом 5 л)
                или сосуд из органического стекла толщиной 8-10 мм.
              </Paragraph>
              <Title level={3} className="dark:text-white">
                Вязкость растворов полимеров
              </Title>
              <Paragraph className="dark:text-white">
                Вязкость разбавленного раствора полимера η существенно выше
                вязкости растворителя η<sub>0</sub>.
              </Paragraph>
              <Paragraph className="dark:text-white">
                При измерении вязкости растворов полимеров обычно используют:
                <ul className="space-y-4 first:mt-4">
                  <li>
                    относительную вязкость (отношение времени истечения раствора
                    к времени истечения чистого растворителя)
                  </li>
                  <Image
                    src={"/Lab3vyaz1.pdf.svg"}
                    alt="f1"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                  <li>удельную вязкость</li>
                  <Image
                    src={"/Lab3vyaz2.pdf.svg"}
                    alt="f1"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                  <li>приведенную вязкость</li>
                  <Image
                    src={"/Lab3vyaz3.pdf.svg"}
                    alt="f1"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                  <li>логарифмическую вязкость</li>
                  <Image
                    src={"/Lab3vyaz4.pdf.svg"}
                    alt="f1"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                  <Text strong className="dark:text-gray-400">
                    где c — концентрация раствора.
                  </Text>
                </ul>
              </Paragraph>
              <Paragraph className="dark:text-white">
                Для исключения влияния концентрации ηпр или ηln экстраполируют
                на бесконечное разбавление и полученную при этом величину
                называют характеристической вязкостью [η]:
                <Image
                  src={"/Lab3vyaz5.pdf.svg"}
                  alt="f1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </Paragraph>
              <Paragraph className="dark:text-white">
                Если вязкость измеряют не в Θ-растворителе, то для расчета
                молекулярной массы используют уравнение Марка-Куна-Хаувинка
                <Image
                  src={"/Lab3vyaz6.pdf.svg"}
                  alt="f1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <Text className="dark:text-white">
                  в котором значение показателя степени а может изменяться в
                  пределах от 0,5 до 1,8 в зависимости от гибкости и длины цепи
                  и качества растворителя. Константа К связана с
                  гидродинамическим взаимодействием макромолекул и растворителя.
                </Text>
              </Paragraph>
              <Paragraph className="dark:text-white">
                Для каждой пары полимер растворитель значения К и а находят
                экспериментально, измеряя независимым методом молекулярную массу
                ряда фракций и определяя их характеристическую вязкость.
              </Paragraph>
              <Paragraph className="dark:text-white">
                Экспериментальные данные представляют в координатах ln[η] = lnK
                + аlnM: значение К находят из величины отрезка, отсекаемого на
                оси ординат, а показатель степени а по тангенсу угла наклона
                прямой.
              </Paragraph>
              <Paragraph className="dark:text-white">
                При вискозиметрическом определении молекулярных масс полимеров
                характеристическая вязкость находится путем экстраполяции на
                бесконечное разбавление измеренных значений приведенной вязкости
                или логарифмической приведенной вязкости:
                <Image
                  src={"/Lab3vyaz7.pdf.svg"}
                  alt="f1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </Paragraph>
              <Paragraph className="dark:text-white">
                Зависимость приведенной вязкости от концентрации в общем виде
                может быть выражена степенным рядом:
                <Image
                  src={"/Lab3vyaz8.pdf.svg"}
                  alt="f1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </Paragraph>
              <Paragraph className="dark:text-white">
                Для осуществления экстраполяции выбирают такие концентрационные
                пределы, чтобы можно было ограничиться первыми двумя членами
                этого ряда (рис. 2). Тогда в системе координат «приведенная
                вязкость (или логарифмическая приведенная вязкость) –
                концентрация» получается линейная зависимость:
                <Image
                  src={"/Lab3vyaz9.pdf.svg"}
                  alt="f1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <Text className="dark:text-white">
                  Предельные значения указанных уравнений совпадают: А = а =
                  [η].
                </Text>
              </Paragraph>
              <Paragraph className="dark:text-white">
                Для нахождения характеристической вязкости экстраполяционным
                методом необходимо располагать рядом значений относительной
                вязкости при различных концентрациях.
                <Image
                  src={"/Lab3plot.pdf.svg"}
                  alt="f1"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <Text className="dark:text-white text-center">
                  Рисунок 2 — Зависимость приведённой вязкости (I) и
                  логиарифмической приведённой вязкости (II) разбавленного
                  раствора полимера от концентрации.
                </Text>
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

                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Исходные вещества:
                  </Text>{" "}
                  полимеры, полученные в работах 1 или 2, толуол - 50 мл.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Оборудование:
                  </Text>{" "}
                  4 колбы с притертыми пробками вместимостью 25 мл, пипетка
                  вместимостью 5 мл, вискозиметр с подвесным уровнем, термостат,
                  секундомер.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Подготовка вискозиметра.
                  </Text>{" "}
                  Новый вискозиметр тщательно моют горячей хромовой смесью
                  (выполняет лаборант), затем большим количеством горячей воды,
                  ополаскивают дистиллированной водой, спиртом и сушат,
                  протягивая водоструйным насосом воздух, который предварительно
                  пропускают через стеклянный фильтр, присоединенный к трубке 2
                  (рис. 1в).
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Приготовление раствора полимера.
                  </Text>{" "}
                  Навеску (примерно 0,2 г) измельченного и высушенного полимера
                  растворяют в 10 мл толуола. Толуол необходимо использовать
                  тщательно высушенный и перегнанный. Раствор полимера не должен
                  содержать взвешенных частиц, которые могут засорить капилляр.
                  Для их удаления раствор, во время заливки его в вискозиметр,
                  фильтруют через стеклянный фильтр № 1 или № 2.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Измерение времени истечения растворителя.
                  </Text>
                  В вискозиметр через трубку 2 (рис. 1 в) наливают около 10 мл
                  растворителя, устанавливают вискозиметр в термостате и
                  выдерживают при 25°С 10-15 мин. К трубке 3 присоединяют
                  резиновую грушу, закрывают трубку 4 пальцем и с помощью груши
                  трижды промывают капилляр 3 и измерительный шарик 6, всасывая
                  жидкость на 1 см выше верхней метки, после чего открывают
                  трубку 4. Затем снова заполняют капилляр 3 и измерительный
                  шарик 6 и отмечают по секундомеру время истечения растворителя
                  от верхней 5 до нижней 7 метки измерительного шарика 6. Время
                  истечения растворителя определяют не менее пяти раз и берут
                  среднее значение. Если результаты измерений отличаются более
                  чем на 0,2 с, их отбрасывают и соответственно увеличивают
                  число измерений.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Определив время истечения растворителя t0,нач сливают
                  растворитель через трубку 2, выдавливая его из капилляра при
                  помощи груши, а затем испаряют остатки растворителя
                  водоструйным насосом, присоединенным к трубке 2 или 3.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text strong type="warning">
                    Измерение времени истечения раствора.
                  </Text>
                  В сухой вискозиметр через трубку 2 вносят градуированной
                  пипеткой 10 мл раствора полимера и снова устанавливают
                  вискозиметр в термостат. После термостатирования в течение 15
                  мин промывают капилляр и измерительный шарик указанным выше
                  способом и измеряют не менее пяти раз время истечения раствора
                  t, не забывая при этом открывать трубку 4 (или снимать
                  колпачок).
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Если η<sub>отн</sub> исходного раствора окажется значительно
                  больше 1,5, то раствор разбавляют в вискозиметре, добавляя
                  пипеткой необходимое количество растворителя. После добавления
                  растворителя раствор тщательно перемешивают нагнетанием
                  воздуха грушей через трубку 3 при закрытой трубке 4. Каждый
                  раз после разбавления, капилляр и измерительный шарик трижды
                  прополаскивают раствором. Если η<sub>отн</sub> меньше 1,5, то
                  готовят новый, более концентрированный раствор.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Раствор с η<sub>отн</sub>, близкой к 1,5, разбавляют для
                  последующих измерений вязкости таким образом, чтобы интервалы
                  получаемых концентраций были приблизительно одинаковы. Для
                  этого к 10 мл такого раствора последовательно добавляют 0,75;
                  1,00; 1,25; 2,00; 4,00 мл растворителя, причем ηотн наиболее
                  разбавленного раствора не должна быть меньше 1,1. Время
                  истечения полученных таким образом растворов с концентрациями
                  c<sub>1</sub>, c<sub>2</sub>, c<sub>3</sub>, c<sub>4</sub> и c
                  <sub>5</sub> обозначают t<sub>1</sub>, t<sub>2</sub>, t
                  <sub>3</sub>, t<sub>4</sub> и t<sub>5</sub> ( c<sub>1</sub> —
                  концентрация исходного раствора). По окончании измерений
                  раствор выливают из вискозиметра и последний 2-3 раза
                  тщательно промывают растворителем с обязательным многократным
                  промыванием капилляра и измерительного шарика, после чего
                  проверяют время истечения растворителя t<sub>0,кон</sub>.
                </Paragraph>
                <Paragraph className="dark:text-white">
                  <Text mark>
                    Разница между значениями t<sub>0,кон</sub> и t
                    <sub>0,нач</sub> , не должна превышать 0,2-0,3 с. В
                    противном случае время истечения растворов следует
                    определить повторно после тщательной очистки вискозиметра.
                  </Text>
                </Paragraph>
                <Paragraph className="dark:text-white">
                  Для раствора каждой концентрации проводят пять измерений и
                  определяют среднее значение.
                </Paragraph>
                <Title level={3} className="dark:text-white">
                  <pre>Задание:</pre>
                </Title>
                <Paragraph className="dark:text-white">
                  <Space direction="vertical" size={16}>
                    <ol className="space-y-5">
                      <li className="pt-5">
                        Полученные результаты записать в табл. 1: Зависимость
                        времени истечения раствора от концентрации полимера
                        <Title>Table</Title>
                      </li>
                      <li className="pt-5">
                        Рассчитать молекулярную массу полимера. Для этого
                        рассчитывают концентрацию раствора c (в г/100 мл). Если
                        раствор приготовлен при температуре Т1, отличающейся от
                        температуры Т2 , то концентрацию вычисляют по формуле:
                        <Image
                          src="/Lab3_concentr.pdf.svg"
                          alt="concentration"
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="w-full h-auto"
                        />
                        <Text className="dark:text-white">
                          где Р - навеска полимера, г: V, V<sub>1</sub> и V
                          <sub>2</sub> объемы. отмеренные при Т<sub>1</sub>,
                          соответственно растворителя, взятого для приготовления
                          раствора, исходного раствора, помещенного в
                          вискозиметр, и растворителя, добавленного в
                          вискозиметр для разбавления раствора, мл; ρ
                          <sub>1</sub>/ρ<sub>2</sub> отношение плотности
                          растворителя при Т<sub>1</sub> и Т<sub>2</sub>; если Т
                          <sub>1</sub> и Т<sub>2</sub> различаются лишь на
                          несколько градусов, можно принять ρ<sub>1</sub>/ρ
                          <sub>2</sub> ≈ 1.
                        </Text>
                      </li>
                    </ol>
                    <Paragraph className="dark:text-white">
                      Результаты измерений вязкости записывают в табл. 2.
                      Зависимость вязкости от концентрации
                    </Paragraph>
                    <Title>Table</Title>
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

export default Lab_3;
