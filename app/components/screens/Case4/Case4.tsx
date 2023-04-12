import Image from "next/image";
import { FC } from "react";
import case4 from "../../../assets/images/cases/case-2-4x.png";

import s from "./Case4.module.scss";

const Case4: FC = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__hero}>
            <Image
              className={s.case__image}
              src={case4}
              alt="case4"
              width={479}
              height={421}
            />
            <div className={s.case__info}>
              <h1 className={s.case__title}>
                Мобильное приложение Спорт-Отели
              </h1>
              <p className={s.case__text}>
                Мобильное приложение &quot;Спорт-Отели&quot; - это идеальное
                решение для менеджеров спортивных команд и менеджеров отелей,
                которые хотят автоматизировать процесс организации командировок
                для спортивных команд во всех городах России.
              </p>
              <p className={s.case__text}>
                Наше приложение предлагает практичное решение, которое сразу же
                улучшит процесс организации путешествий для спортивных команд,
                предоставляя комфортное и безопасное размещение в отелях.
                Начиная от выбора гостиницы до оформления бронирования, наше
                приложение делает все проще и удобнее.
              </p>
            </div>
          </div>
          <h2 className={s.case__subtitle}>
            Основные преимущества нашего приложения:
          </h2>
          <ul className={s.case__list}>
            <li className={s.item}>
              <span className={s.item__marker}>01</span> Автоматическая система
              оформления заявок
              <p className={s.item__text}>
                Это позволяет менеджерам спортивных команд оформлять заявки на
                размещения команд в отелях быстро и эффективно, минимизируя
                риски при бронировании.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>02</span> Доступность
              <p className={s.item__text}>
                Наше приложение доступно в любое время и в любом месте, это дает
                возможность менеджерам спортивных команд оформлять и
                просматривать бронирования где бы они не находились.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>03</span> Online-чат
              <p className={s.item__text}>
                Приложение предоставляет функцию обмена сообщениями, что ает
                возможность менеджеру спортивной команды сотрудничать и общаться
                с менеджером гостиницы в режиме реального времени
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>04</span> Персонализация
              <p className={s.item__text}>
                Возможности нашего приложения в класстеризации гостиниц и
                настройках позволяет менеджеру спортивной команды выбрать
                оптимальный вариант для любого спортклуба и бюджета.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>05</span> Безопасность
              <p className={s.item__text}>
                Наше приложение гарантирует полную безопасность платежей и
                хранения информации
              </p>
            </li>
          </ul>
          <div className={s.case__results}>
            <div className={s.case__result}>
              Сократили время на обработку заявки с 1 рабочего дня до 1 часа
            </div>
            <div className={s.case__result}>
              Увеличили прибыль Национального Центра командирования в 2 раза
            </div>
            <div className={s.case__result}>
              Сократили расходы представителей спортивных команд и спортивных
              ассоциаций в 3 раза
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case4;
