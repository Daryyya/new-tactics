import { macbook } from "@/assets/images/home";
import { ScrollContext } from "@/utils/ScrollObserver/ScrollObserver";
import Image from "next/image";
import { FC, useContext, useRef, useState } from "react";
import Discuss from "../../modals/Discuss/Discuss";
import styles from "./Hero.module.scss";

const Hero: FC = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const refContainer = useRef<HTMLSelectElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <>
      <section
        ref={refContainer}
        className={styles.hero}
        style={{
          transform: `translateY(-${progress * 20}vh)`,
          zIndex: progress < 0.5 ? 0 : -1,
        }}
      >
        <div className="container">
          <div className={styles.heroBody}>
            <div className={styles.heroInfo}>
              <h1 className={styles.title}>КОРПОРАТИВНЫЕ СИСТЕМЫ</h1>
              <p className={styles.text}>
                Лидер №1 высоких технологий в сфере импортозамещения 2022 г
              </p>
              <button
                onClick={() => setIsOpenPopup(true)}
                className={styles.button}
              >
                Скачать бриф на разработку проекта
              </button>
            </div>
            <div>
              <Image className={styles.heroImage} src={macbook} alt="laptop" />
            </div>
          </div>
        </div>
      </section>
      {isOpenPopup ? <Discuss setOpenPopup={setIsOpenPopup} /> : null}
    </>
  );
};

export default Hero;
