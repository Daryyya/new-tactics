import Image from "next/image";
import React from "react";
import case12 from "../../../assets/images/cases/case-14-4x.png";
import s from "./Case14.module.scss";

const Case14 = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__hero}>
            <div className={s.case__info}>
              <h1 className={s.case__title}>
                Система для логческих контроллеров кранов и тяжелого
                оборудования
              </h1>
              <p className={s.case__text}>
                Проект заключается в создании системы антираскачки для больших
                кранов, которые перевозят трубы на каретке. Система будет
                включать в себя встроенный программный модуль, который будет
                работать на логическом контроллере Sneider Electric.
                Разработанная программа будет отслеживать амплитуду колебаний
                крановой конструкции и, в случае превышения допустимой нормы,
                предпринимать меры для уменьшения колебаний.
              </p>
              <p className={s.case__text}>
                Программа будет работать на основе анализа сигналов, поступающих
                от датчиков, расположенных на кране. После анализа сигналов
                программа приведет в действие гидравлические приводы крана,
                чтобы компенсировать нежелательные колебания, что позволит
                уменьшить вероятность аварийных ситуаций и увеличить
                безопасность работ на производстве.
              </p>
            </div>
            <Image
              className={s.case__image}
              src={case12}
              alt="case12"
              width={551}
            />
          </div>
          <p className={s.case__text}>
            Кроме того, система будет иметь возможность записывать данные о
            колебаниях и даты их возникновения, что поможет организации
            отследить общий ход работы крана и выявить возможные проблемы в
            работе. Также, система будет иметь функцию оповещения персонала, в
            случае превышения допустимых значений колебаний, что повысит
            эффективность работы и безопасность производства.
          </p>
          <p className={s.case__text}>
            Предложенное решение позволит уменьшить риски аварий и повысить
            безопасность работ на производстве, а также увеличить
            производительность за счет сокращения простоя выработки продукции.
          </p>
          <div className={s.case__results}>
            <div className={s.case__result}>
              Снижение количества несчастных случаев / порчи перевозимых труб на
              объектах практически до нуля
            </div>
            <div className={s.case__result}>
              Повышение стоимости продаж кранов Кранового завода на 15% с учетом
              внедренной программы в каждый кран
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case14;
