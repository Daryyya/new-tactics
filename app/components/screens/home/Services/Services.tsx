import { FC, useState } from "react";
import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import { servicesItems } from "@/utils/services.data";
import { Design } from "./Design";
import { Development } from "./Development";
import { Optimization } from "./Optimization";
import { Support } from "./Support";

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className={styles.services}>
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
          {servicesItems.map((item, index) => (
            <h4
              className={activeIndex === index ? `${styles.active}` : ""}
              onClick={() => setActiveIndex(index)}
              key={item}
            >
              {item}
            </h4>
          ))}
        </motion.div>
        {activeIndex === 0 ? (
          <Design />
        ) : activeIndex === 1 ? (
          <Development />
        ) : activeIndex === 2 ? (
          <Optimization />
        ) : activeIndex === 3 ? (
          <Support />
        ) : null}
      </div>
    </section>
  );
};

export default Services;
