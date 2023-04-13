import Image from "next/image";
import React from "react";
import case10 from "../../../assets/images/cases/case-10-4x.png";
import s from "./Case10.module.scss";

const Case10 = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__hero}>
            <Image
              className={s.case__image}
              src={case10}
              alt="case10"
              width={479}
              height={421}
            />
            <div className={s.case__info}>
              <h1 className={s.case__title}>Панель для Росбанка</h1>
              <p className={s.case__text}>
                Разработка интерактивной панели для Торговых центров и отделений
                с навигацией по помещению от Росбанк Удобный интерфейс навигации
                для пользователей. Интерактивное описание объектов на карте и
                отдельно удобная функциональность сервисного обслуживания и
                обновления ПО
              </p>
              <div className={s.case__results}>
                <div className={s.case__result}>Увеличилось количество клиентов отделений в 1.5 раза</div>
                <div className={s.case__result}>Увеличилось количество посетителей торговых центров в 1.7 раза</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case10;
