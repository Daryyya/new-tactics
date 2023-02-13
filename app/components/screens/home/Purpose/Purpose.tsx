import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./Purpose.module.scss";
import Image from "next/image";
import { checkSvg, purposeImg, purposeSvg } from "@/assets/images/home";

const Purpose: FC = () => {
  return (
    <section className={styles.purpose}>
      <div className="container">
        <div className="line">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            transition={{ duration: 1.2 }}
          />
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span>04 |</span> Цель
          </motion.h2>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.purposeTop}
          >
            <div className={styles.purposeTitle}>
              <Image src={purposeSvg} alt="иконка" />
              <h2>Цель нашей компании</h2>
            </div>
            <div className={styles.text}>
              <div className={styles.paragraphLine} />
              <p>
                Повышение эффективности российских компаний в доле
                экономического сектора
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.purposeBottom}
          >
            <div>
              <Image className={styles.image} src={purposeImg} alt="код" />
            </div>
            <div>
              <div className={styles.descr}>
                <Image src={checkSvg} alt="иконка" />
                <p>
                  Компания специализируется на создании, сопровождении и
                  развитии технологичных корпоративных систем и мобильных
                  приложений.
                </p>
              </div>
              <div className={styles.descr}>
                <Image src={checkSvg} alt="иконка" />
                <p>
                  Мы одни из лидеров рынка в области разработки и оптимизации
                  систем автоматизации бизнеса и госуправления (CRM, ERP, BI),
                  разработки ПО, интранет-порталов и развития цифрового
                  маркетинга.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
