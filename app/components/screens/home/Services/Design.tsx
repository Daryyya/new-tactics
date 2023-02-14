import { FC } from "react";

import { motion } from "framer-motion";
import styles from "./Services.module.scss";
import Image from "next/image";
import { designSvg } from "@/assets/images/home";
import Link from "next/link";

export const Design: FC = () => {
  return (
    <div className={styles.serviceBlock}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image className={styles.servicesImage} src={designSvg} alt="дизайн" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.info}
      >
        <h2>Проектирование и дизайн</h2>
        <p>
          Проектирование программных интерфейсов (UI/UX). Создание
          пользовательской логики. Отрисовка уникального дизайн-макета по
          запросам клиента.
        </p>
        <Link href="/design">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
