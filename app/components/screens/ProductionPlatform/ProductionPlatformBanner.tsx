import { telegramSvg } from "@/assets/images/home";
import { whatsappSvg, productionPlatformBanner } from "@/assets/images/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Discuss from "../modals/Discuss/Discuss";

import styles from "./ProductionPlatformBanner.module.scss";

const ProductionPlatformBanner = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.productionPlatformBanner}>
        <div className="container">
          <div className={styles.productionPlatformBannerBody}>
            <div className={styles.info}>
              <h1>Разработка платформ для производства</h1>
              <p>
                Разработка от 800 000 рублей, интеграция с любыми ПО и
                поддержкой на 5 лет
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
                src={productionPlatformBanner}
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

export default ProductionPlatformBanner;
