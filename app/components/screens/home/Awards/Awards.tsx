import React from "react";
import styles from "./Awards.module.scss";
import { motion } from "framer-motion";
import { award } from "@/assets/images/home";
import Image from "next/image";

export const Awards = () => {
  return (
    <section className={styles.awards}>
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
            <span>07 |</span> Награды
          </motion.h2>
        </div>
        <div className={styles.awardsBody}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.awardsItem}
          >
            <Image className={styles.image} src={award} alt="award" />
            <h3>Награда за лучшее мобильное приложение 2022</h3>
            <p>
              We don&apos;t just help with your IT needs. We focus on the entire
              ecosystem surrounding it. Bringing together people, process, and
              technology, we pride ourselves on delivering solutions that work
              in reality. Not theory.
            </p>
            <button>Подробнее</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
