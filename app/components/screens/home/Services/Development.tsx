import { FC } from "react";

import { motion } from "framer-motion";
import styles from "./Services.module.scss";
import Image from "next/image";
import { developmentSvg } from "@/assets/images/home";
import Link from "next/link";

export const Development: FC = () => {
  return (
    <div className={styles.serviceBlock}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className={styles.servicesImage}
          src={developmentSvg}
          alt="разработка"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.info}
      >
        <h2>Разработка</h2>
        <p>
          - Разработка высоконагруженных систем для производств <br /> -
          Разработка и внедрение CRM и ERP - систем <br /> - Автоматизированные
          web-платформы для бухгалтерии и маркетинга <br /> - Разработка систем
          удаленной поддержки клиентов <br /> - Разработка интернет-магазинов и
          торговых площадок для реализации продукции <br /> -
          Многопользователькие мобильные приложения для платформ iOS / Android{" "}
          <br /> - Лицензионные сервера и системы защиты интеллектуальной
          собственности <br /> - Разработка мессенджеров и платформ для
          коммуникации сотрудников <br /> - Разработка новостных порталов
        </p>
        <Link href="/development">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
