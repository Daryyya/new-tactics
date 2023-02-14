import { FC } from "react";

import { motion } from "framer-motion";

import styles from "./Services.module.scss";
import Image from "next/image";
import { optimizationSvg } from "@/assets/images/home";
import Link from "next/link";

export const Optimization: FC = () => {
  return (
    <div className={styles.serviceBlock}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className={styles.servicesImage}
          src={optimizationSvg}
          alt="разработка"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.info}
      >
        <h2>Оптимизация и защита</h2>
        <p>
          Настройка пользовательского окружения, ускорение отклика каждого
          запроса с возможностью поддерживать до 10 000 пользователей любой
          системы одновременно.
        </p>
        <Link href="/optimization">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
