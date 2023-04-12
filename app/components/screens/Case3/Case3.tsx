import Image from "next/image";
import { FC } from "react";
import case1 from "../../../assets/images/cases/case-3-4x.png";

import s from "./Case3.module.scss";

const Case3: FC = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__info}>
            <h1 className={s.case__title}>
              Мобильное приложение для размещения курсов по архитектуре
              Architechik
            </h1>
            <p className={s.case__text}>
              Мобильное приложение, которое поможет владельцу этой идеи
              зарабатывать деньги на своих знаниях и опыте в области
              архитектуры. Благодаря приложению, пользователи получат доступ к
              самой свежей и актуальной информации по архитектуре, которую вы
              будете предоставлять актуальные обновления.
            </p>
            <p className={s.case__text}>
              Каждый пользователь приложения сможет пользоваться полезными
              функциями приложения: учебный материал, форумы, расписание,
              прогресс-карта, и многими другими функциями. Курс по архитектуре -
              это надежный и удобный инструмент для развития знаний и
              профессиональных навыков в области архитектуры, который поможет
              владельцу приложения зарабатывать деньги.
            </p>
          </div>
          <h2 className={s.case__subtitle}>Основные функции приложения:</h2>
          <ul className={s.case__list}>
            <li className={s.item}>
              <span className={s.item__marker}>01</span> Курсы и учебный
              материал
              <p className={s.item__text}>
                Приложение может предоставлять доступ к курсам по архитектуре, а
                также к обучающим видео, статьям и другим ресурсам.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>02</span> Форум
              <p className={s.item__text}>
                Приложение может включать форум для общения с преподавателями и
                другими учениками, где можно обсуждать вопросы, задавать вопросы
                и делиться опытом.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>03</span> Расписание
              <p className={s.item__text}>
                Приложение может иметь функцию управления расписанием, чтобы
                помочь студентам следить за своими занятиями и другими
                обязательствами.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>04</span> Оценки и прогресс
              <p className={s.item__text}>
                Приложение может отслеживать учебный прогресс студентов, а также
                отображать полученные оценки и рейтинги.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>05</span> Интерактивное обучение
              <p className={s.item__text}>
                Приложение может включать интерактивные задания и тесты для
                повышения практических навыков учеников
              </p>
            </li>
          </ul>
          <div className={s.case__result}>Более 500 оплаченных подписок</div>
          <Image
            className={s.case__image}
            src={case1}
            alt="case3"
            width={359}
            height={724}
          />
        </div>
      </div>
    </section>
  );
};

export default Case3;
