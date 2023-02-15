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
          - Используем всю мощность выделенного сервера для разделения
          пользовательких запросов и обращений к Базе Данных для ускорения
          вашего сайта или системы. <br /> - Полностью оптимизируем интерфейс и
          избавляемся от лишних и &#39;тяжелых&#39; элементов для загрузки.
          Моментальный отклик системы за счет уникальных программных решений.{" "}
          <br /> - Все данные надежно шифруются первичным и вторичным алгоритмом
          шифрования с соблюдением всех современных стандартов Информационной
          Безопасности, заверенных Министерством Цифрового Развития и связи РФ.
        </p>
        <Link href="/support">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
