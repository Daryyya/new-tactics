import { FC } from "react";
import styles from "./Cases.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { firstCase } from "@/assets/images/home";

const Cases: FC = () => {
  return (
    <section className={styles.cases}>
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
            <span>02 |</span> Кейсы
          </motion.h2>
        </div>
        <div className={styles.casesItems}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.casesItem}
          >
            <Image src={firstCase} alt="кейс" />
            <div className={styles.hoverBlock}>
              <h3>Finance (fullstack)</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <button>Перейти к проекту</button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.casesItem}
          >
            <Image src={firstCase} alt="кейс" />
            <div className={styles.hoverBlock}>
              <h3>Finance (fullstack)</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <button>Перейти к проекту</button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.casesItem}
          >
            <Image src={firstCase} alt="кейс" />
            <div className={styles.hoverBlock}>
              <h3>Finance (fullstack)</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <button>Перейти к проекту</button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.casesItem}
          >
            <Image src={firstCase} alt="кейс" />
            <div className={styles.hoverBlock}>
              <h3>Finance (fullstack)</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <button>Перейти к проекту</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
