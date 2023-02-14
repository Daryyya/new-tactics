import { FC } from "react";

import { motion } from "framer-motion";

import styles from "./Services.module.scss";
import Image from "next/image";
import { supportImg } from "@/assets/images/home";
import Link from "next/link";

export const Support: FC = () => {
  return (
    <div className={styles.serviceBlock}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className={styles.servicesImage}
          src={supportImg}
          alt="разработка"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.info}
      >
        <h2>Поддержка</h2>
        <p>
          Поддерживаем технически проект после разработки и запуска. Обновляем и
          расширяем любую систему по запросу нашего клиента, а также следим за
          постоянной работоспособностью системы.
        </p>
        <Link href="/support">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
