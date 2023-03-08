import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./Team.module.scss";
import Image from "next/image";
import { teamFirst, teamSecond, teamThird } from "@/assets/images/home";

export const Team: FC = () => {
  return (
    <section className={styles.team}>
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
            <span>06 |</span> Команда
          </motion.h2>
        </div>
        <div className={styles.teamBody}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.teamItem}
          >
            <Image
              className={styles.image}
              src={teamFirst}
              alt="член команды"
            />
            <h3>Глотов Сергей</h3>
            <p>Ведущий разработчик</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.teamItem}
          >
            <Image
              className={styles.image}
              src={teamSecond}
              alt="член команды"
            />
            <h3>Прохоренко Кристина</h3>
            <p>Ведущий маркетолог</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.teamItem}
          >
            <Image
              className={styles.image}
              src={teamThird}
              alt="член команды"
            />
            <h3>Репина Елизавета</h3>
            <p>Исполнительный директор</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
