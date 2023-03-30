import React from "react";
import styles from "./Mission.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { missionImage, missionSvg, missionWriting } from "@/assets/images/home";

export const Mission = () => {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className="line">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            transition={{ duration: 2 }}
          />
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span>05 |</span> Миссия
          </motion.h2>
        </div>
        <div className={styles.missionBody}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image src={missionImage} alt="Никита" />
            <div className={styles.director}>
              <h3>Никита Салтанюк</h3>
              <p>Учредитель, директор по развитию Program Tactics</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.info}
          >
            <div className={styles.missionTitle}>
              <h2>Миссия нашей компании</h2>
              <Image src={missionSvg} alt="миссия" />
            </div>
            <p className={styles.missionText}>
              Получить высоко развитое технологическое общество, в котором
              присутствует разумность обмена, производства продукта и достижения
              цели их потребления
            </p>
            <Image
              className={styles.handwrites}
              src={missionWriting}
              alt="подпись"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
