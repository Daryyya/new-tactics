import { telegramSvg } from "@/assets/images/home";
import { whatsappSvg, corporateSystemBanner } from "@/assets/images/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Discuss from "../modals/Discuss/Discuss";

import styles from "./CorporateSystemBanner.module.scss";

const CorporateSystemBanner = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.corporateSystemBanner}>
        <div className="container">
          <div className={styles.corporateSystemBannerBody}>
            <div className={styles.info}>
              <h1>
                Корпортивные системы для цифровизации бизнеса и госуправления
                "под ключ"
              </h1>
              <p>Готовые ERP, CRM, LMS, WMS, CMS за 2 месяца</p>
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
                src={corporateSystemBanner}
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

export default CorporateSystemBanner;
