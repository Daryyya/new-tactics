import { developmentSvg, telegramSvg } from "@/assets/images/home";
import { whatsappSvg } from "@/assets/images/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Discuss from "../modals/Discuss/Discuss";

import styles from "./WebApplicationBunner.module.scss";

const WebApplicationBanner = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.webApplicationBanner}>
        <div className="container">
          <div className={styles.webApplicationBannerBody}>
            <div className={styles.info}>
              <h1>Разработка веб-приложений для оптимизации бизнеса</h1>
              <p>
                Разработка веб-приложений от 80 000 руб на базе авторских
                алгоритмов ИИ
              </p>
              <button onClick={() => setIsOpenPopup(true)}>
                Скачать бриф на разработку проекта
              </button>
              <div className={styles.icons}>
                <Link target="_blank" href="https://wa.me/79166974227">
                  <Image src={whatsappSvg} alt="whatsapp" />
                </Link>
                <Link target="_blank" href="https://telegram.me/PROT_labs">
                  <Image src={telegramSvg} alt="telegram" />
                </Link>
              </div>
            </div>
            <div>
              <Image
                className={styles.image}
                src={developmentSvg}
                alt="Приложение"
              />
            </div>
          </div>
        </div>
      </section>
      {isOpenPopup ? <Discuss setOpenPopup={setIsOpenPopup} /> : null}
    </>
  );
};

export default WebApplicationBanner;
