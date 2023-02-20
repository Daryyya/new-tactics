import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const About: FC = () => {
  return (
    <section className={styles.about}>
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
            <span>03 |</span> О нас
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.aboutItems}
        >
          <div className={styles.aboutItem}>
            <h3>2</h3>
            <p>Месяца среднее время создания проекта с нуля</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>45+</h3>
            <p>Млн. ₽ принесли нашим плиентам разработанные решения</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>5</h3>
            <p>Лет компания на рынке IT-технологий</p>
          </div>
          <div className={styles.aboutItem}>
            <h3>150+</h3>
            <p>Успешно реализованных проектов и созданных программ</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
