import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./Clients.module.scss";
import Image from "next/image";
import {
  clientsFirst,
  clientsSecond,
  clientsThird,
} from "@/assets/images/home";

export const Clients: FC = () => {
  return (
    <section className={styles.clients}>
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
            <span>08 |</span> Клиенты
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.clientsBody}
        >
          <div className={styles.clientsItem}>
            <Image src={clientsFirst} alt="клиент" />
            <div>
              <h3>Nt-sports</h3>
              <p>Центр спортивного командирования, планирования и подбора.</p>
            </div>
          </div>
          <div className={styles.clientsItem}>
            <Image src={clientsSecond} alt="клиент" />
            <div>
              <h3>Ассоциация СВС</h3>
              <p>Некоммерческая организация “Союз Ветеранов Спорта”</p>
            </div>
          </div>
          <div className={styles.clientsItem}>
            <Image src={clientsThird} alt="клиент" />
            <div>
              <h3>Правиительство г.Москва</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
