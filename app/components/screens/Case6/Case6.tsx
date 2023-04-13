import Image from "next/image";
import React from "react";
import case5 from "../../../assets/images/cases/case-6-4x.png";
import case6 from "../../../assets/images/cases/case-6-2-4x.png";
import s from "./Case6.module.scss";

const Case6 = () => {
  return (
    <section className={s.case__wrapper}>
      <div className="container">
        <div className={s.case__body}>
          <div className={s.case__hero}>
            <Image
              className={s.case__image}
              src={case5}
              alt="case5"
              width={479}
              height={421}
            />
            <div className={s.case__info}>
              <h1 className={s.case__title}>
                Экосистема корпоративного обслуживания и документооборота
              </h1>
              <p className={s.case__text}>
                Экосистема создана для упрощения и оптимизации работы внутри
                компании. Она состоит из web-платформы и мобильного приложения.
                Эти два компонента работают в синхронизации для обеспечения
                максимального удобства и эффективности.
              </p>
              <p className={s.case__text}>
                Web-платформа является основой экосистемы. Она предоставляет
                мощные инструменты для управления документами и файлами, а также
                для обмена информацией внутри корпорации. Наша платформа
                оснащена системой управления проектами, учетных записей
                пользователей и системой безопасности для защиты
                конфиденциальных данных. Все функции доступны в одном месте, что
                облегчает процесс взаимодействия по всей компании
              </p>
            </div>
          </div>
          <div className={s.case__hero}>
            <div className={s.case__info}>
              <p className={s.case__text}>
                Мобильное приложение позволяет пользователям получать доступ к
                электронным документам и файлам клиентов с любого устройства,
                обеспечивая идеальную связь и взаимодействие между сотрудниками
                и клиентами в любом месте и в любое время. Это приложение
                обладает такими же функциями, как и веб-платформа, включая
                возможность совместного использования продукта и работы в режиме
                реального времени.
              </p>
              <div className={s.case__results}>
                <div className={s.case__result}>Сокращение расходов на оплату лицензий 1С и Битрикс 24 на 1 млн руб в год</div>
                <div className={s.case__result}>Ускорили обработку документов в 3 раза</div>
              </div>
            </div>
            <Image className={s.case__image} src={case6} alt='case6'width={505} height={444}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case6;
