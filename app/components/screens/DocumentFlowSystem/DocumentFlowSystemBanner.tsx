import { telegramSvg } from "@/assets/images/home";
import { whatsappSvg, documentFlowSystembanner } from "@/assets/images/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Discuss from "../modals/Discuss/Discuss";

import styles from "./DocumentFlowSystemBanner.module.scss";

const DocumentFlowSystemBanner = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.documentFlowSystemBanner}>
        <div className="container">
          <div className={styles.documentFlowSystemBannerBody}>
            <div className={styles.info}>
              <h1>Системы электронного документооборота под ключ</h1>
              <p>Разработка от 600 000 руб + веб-версия в ПОДАРОК</p>
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
                src={documentFlowSystembanner}
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

export default DocumentFlowSystemBanner;
