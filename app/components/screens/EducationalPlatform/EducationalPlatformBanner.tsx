import { telegramSvg } from "@/assets/images/home";
import { whatsappSvg, educationalPlatformBanner } from "@/assets/images/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Discuss from "../modals/Discuss/Discuss";

import styles from "./EducationalPlatformBanner.module.scss";

const EducationalPlatformBanner = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.educationalPlatfromBanner}>
        <div className="container">
          <div className={styles.educationalPlatfromBannerBody}>
            <div className={styles.info}>
              <h1>Разработка образовательных платформ</h1>
              <p>Разработка платформ до 500 000₽ и поддержкой на 15 лет</p>
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
                src={educationalPlatformBanner}
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

export default EducationalPlatformBanner;
