import Image from "next/image";
import { FC } from "react";
import case1 from "../../../assets/images/cases/case-1-4x.png";

import s from "./Case1.module.scss";

const MobileBanner: FC = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__info}>
            <h1 className={s.case__title}>
              Мобильное приложение для Союза Ветеранов Спорта
            </h1>
            <p className={s.case__text}>
              Мобильного приложения лояльности для членов Союза Ветеранов Спорта
              Сибири позволит укрепить связь между клубом и его участниками.
              Одним из основных преимуществ данного приложения является
              возможность повышения лояльности членов клуба. Участники Союза
              смогут получать персонализированные бонусы и скидки, следить за
              новостными обновлениями и принимать участие в спортивных
              мероприятиях, что привлечет больше внимания к клубу и спортивным
              мероприятиям, организовываемым клубом.
            </p>
            <p className={s.case__text}>
              Кроме того, использование такого приложения позволит клубу
              анализировать данные пользователей и лучше понимать их
              потребности, что может улучшить работу клуба, и повысить качество
              услуг, которые оказывает клуб. Это может привести к росту
              количества участников клуба и увеличению прибыли владельца
              приложения и клуба в целом.
            </p>
          </div>
          <h2 className={s.case__subtitle}>Основные функции приложения:</h2>
          <ul className={s.case__list}>
            <li className={s.item}>
              <span className={s.item__marker}>01</span> Привилегии и скидки
              <p className={s.item__text}>
                Пользование приложением позволяет пользователю- члену клуба
                получить доступ к различным привилегиям и скидкам,
                предоставляемым администратором приложения. Например, это могут
                быть скидки на спортивное оборудование, бесплатный доступ к
                групповым тренировкам, VIP-места на мероприятия клуба и многое
                другое
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>02</span> Рейтинг и бонусы
              <p className={s.item__text}>
                Приложение может предусматривать программу бонусов и наград для
                пользователей-членов клуба, которые активно участвуют в жизни
                клуба. Например, пользователи-члены клуба могут зарабатывать
                бонусы за регулярное посещение мероприятий клуба и участие в
                спортивных соревнованиях
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>03</span> Уведомления и реклама
              <p className={s.item__text}>
                Приложение может уведомлять пользователей-членов клуба о
                предстоящих мероприятиях, специальных предложениях и акциях
                клуба, а также об изменениях в режиме работы тренажерного зала,
                бассейна и т.д.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>04</span> Простота и удобство использования
              <p className={s.item__text}>
                Приложение должно быть удобным для использования, с интуитивно
                понятным интерфейсом и легким поиском необходимой информации.
              </p>
            </li>
            <li className={s.item}>
              <span className={s.item__marker}>05</span> Обратная связь и поддержка
              <p className={s.item__text}>
                Приложение может предоставлять возможность общаться с
                администратором приложения, задавать вопросы и получать
                рекомендации.
              </p>
            </li>
          </ul>
          <p className={s.case__total}>
            Таким образом, мобильное приложение лояльности для клуба по
            интересам станет полезным инструментом для членов клуба, которые
            хотят получить доступ к персонализированным бонусам и скидкам,
            узнавать последние новости и участвовать в мероприятиях клуба.
            Приложение даст пользователям-членам клуба возможность быть в курсе
            последних новостей, событий и представит им приятные бонусы и скидки
          </p>
          <div className={s.case__result}>Увеличение количества попечителей на 30%</div>
          <Image className={s.case__image} src={case1} alt="case1" width={339} height={724} />
        </div>
      </div>
    </section>
  );
};

export default MobileBanner;
