import Image from "next/image";
import { FC } from "react";
import case11 from "../../../assets/images/cases/case-11-4x.png";

import s from "./Case11.module.scss";

const Case11: FC = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__info}>
            <h1 className={s.case__title}>
              Система документооборота для Минсельхоза
            </h1>
            <p className={s.case__text}>
              Наша компания создала программный продукт в области электронного
              документооборота - это высокоэффективная система, позволяющая
              многоканально обрабатывать и управлять документами в рамках
              организации.
            </p>
            <p className={s.case__text}>
              Мы предлагаем нашу систему как решение для автоматизации процессов
              обработки документов, которое дает огромную экономию времени и
              ресурсов. Стандартные ручные процедуры обработки документов
              сократятся в несколько раз, а риски ошибок и задержек будут
              сведены к минимуму.
            </p>
          </div>
          <h2 className={s.case__subtitle}>
            Особенности нашей системы включают:
          </h2>
          <ul className={s.case__list}>
            <li className={s.item}>
              Интеграцию с существующими учетными системами и базами данных, что
              делает процесс обработки документов еще более удобным и быстрым
            </li>
            <li className={s.item}>
              Возможность автоматического создания процессов обработки
              документов, что позволяет работать соответствующим отделам и
              персоналу в режиме онлайн.
            </li>
            <li className={s.item}>
              Создание единого реестра, который упрощает контроль и
              регулирование работы с каждым документом.
            </li>
            <li className={s.item}>
              Распределение прав доступа, чтобы управлять информационными
              потоками и обеспечить безопасность с поддержкой наших систем
              защиты.
            </li>
          </ul>
          <p className={s.case__total}>
            Мы хотим подчеркнуть внедрение нашей системы в одно из крупных
            государственных учреждений, на примере с которым общество хорошо
            знакомо. В результате внедрения новой системы в этом учреждении
            произошли следующие преобразования:
          </p>
          <ul className={s.case__list}>
            <li className={s.item}>Увеличение эффективности обработки документов на 70%;</li>
            <li className={s.item}>Сокращение времени обработки сложных документов на 50%;</li>
            <li className={s.item}>Сведение ошибок обработки документов к минимуму;</li>
            <li className={s.item}>
              Улучшение общего процесса ведения отчетности, бухгалтерии и
              архивации.
            </li>
          </ul>
          <p className={s.case__total}>
            Эта система электронного документооборота уже успешно используется в
            крупных государственных учреждениях и предприятиях, и готовы
            предоставить этот опыт и решения нашим клиентам в различных областях
            деятельности.
          </p>
          <Image
            className={s.case__image}
            src={case11}
            alt="case11"
            width={678}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Case11;
