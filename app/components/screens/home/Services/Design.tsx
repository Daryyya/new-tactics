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
          - Прототип внешнего вида будущей системы (Figma / Sketch / Adobe XD)
          <br /> - Уникальный дизайн мобильного приложения (UI) <br /> - Дизайн
          Административной панели и основных экранов корпоративной системы (UX)
          <br /> - Построение пользователькой логики и отрисовка всех сценариев
          системы <br /> - Дизайн высоконагруженных платформ и CRM - систем в
          корпоративном цвете, под любой запрос клиента <br /> - Оптимизация
          дизайна за счет грамотного распределения элементов на странице
        </p>
        <Link href="/design">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
