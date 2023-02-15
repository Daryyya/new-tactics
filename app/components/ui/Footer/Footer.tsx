import {
  footerPhoneSvg,
  locationSvg,
  mailSvg,
  mapSvg,
  ministerImg,
  securitySvg,
  telegramSvg,
  vkSvg,
} from "@/assets/images/home";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className="container">
        <div className={styles.footerBody}>
          <div className={styles.info}>
            <h5>о компании</h5>
            <p className={styles.desr}>
              Производитель и поставщик программного обеспечения для бизнеса,
              предприятий и государственных учреждений. Региональная IT-компания
              с опытом реализации более 150-и коммерческих проектов.
            </p>
            <div className={styles.location}>
              <div className={styles.locationItem}>
                <h4>Москва</h4>
                <div className={styles.locationLine} />
                <div className={styles.block}>
                  <Image src={locationSvg} alt="локация" />
                  <p>г. Москва, б. Энтузиастов 2</p>
                </div>
                <div className={styles.block}>
                  <Image src={footerPhoneSvg} alt="телефон" />
                  <p>+7 (916) 697 42 27</p>
                </div>
                <div className={styles.block}>
                  <Image src={mailSvg} alt="мэйл" />
                  <p>connect@protactics.ru</p>
                </div>
              </div>
              <div className={styles.locationItem}>
                <h4>Оренбург</h4>
                <div className={styles.locationLine} />
                <div className={styles.block}>
                  <Image src={locationSvg} alt="локация" />
                  <p>г. Оренбург, ул. Чкалова 3/1</p>
                </div>
                <div className={styles.block}>
                  <Image src={footerPhoneSvg} alt="телефон" />
                  <p>+7 (916) 697 42 27</p>
                </div>
                <div className={styles.block}>
                  <Image src={mailSvg} alt="мэйл" />
                  <p>pm@protactics.ru</p>
                </div>
              </div>
            </div>
            <div className={styles.social}>
              <div>
                <Image src={vkSvg} alt="Вконтакте" />
              </div>
              <div>
                <Image src={telegramSvg} alt="Телеграм" />
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <Image src={mapSvg} alt="карта" />
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.supoortItem}>
            <Image src={ministerImg} alt="министерство" />
            <p>
              При поддержке Министерства цифрового развития и связи Оренбургской
              области{" "}
            </p>
          </div>
          <div className={styles.supoortItem}>
            <Image src={securitySvg} alt="министерство" />
            <div>
              <p>Надёжный предпринематель</p>
              <Link href="/">По версии Tenchat</Link>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2022. PROT Labs. Все права защищены. ИП Салтанюк Никита Андреевич .
        </p>
      </div>
    </footer>
  );
};
