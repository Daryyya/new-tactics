import { designSvg } from "@/assets/images/home";
import Image from "next/image";
import { FC } from "react";
import styles from "./Services.module.scss";
import { motion } from "framer-motion";

const Services: FC = () => {
  return (
    <section className={styles.services}>
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
            <span>01 |</span> Услуги
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.servicesItems}
        >
          <h4 className={styles.active}>ДИЗАЙН</h4>
          <h4>РАЗРАБОТКА</h4>
          <h4>ОПТИМИЗАЦИЯ И ЗАЩИТА</h4>
          <h4>ПОДДЕРЖКА</h4>
        </motion.div>
        <div className={styles.serviceBlock}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={designSvg} alt="дизайн" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.info}
          >
            <h2>Проектирование и дизайн</h2>
            <p>
              Компания специализируется на создании, сопровождении и развитии
              технологичных корпоративных систем и мобильных приложений.
            </p>
            <button>перейти к услуге</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
