import { telegramSvg } from "@/assets/images/home";
import { mobileBanner, whatsappSvg } from "@/assets/images/shared";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import Discuss from "../modals/Discuss/Discuss";
import styles from "./MobileBanner.module.scss";

const MobileBanner: FC = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.mobileBanner}>
        <div className="container">
          <div className={styles.mobileBannerBody}>
            <div className={styles.info}>
              <h1>Разработка мобильных приложений</h1>
              <p>
                Разработка мобильного приложения от 250 000 рублей с технической
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
                src={mobileBanner}
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

export default MobileBanner;
