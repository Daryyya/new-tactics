import { FC, useState } from "react";
import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import { servicesItems } from "@/utils/services.data";
import { Design } from "./Design";
import { Development } from "./Development";
import { Optimization } from "./Optimization";
import { Support } from "./Support";
import Link from "next/link";
import Image from "next/image";

const Services: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className={styles.services}>
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
            <span>01 |</span> Услуги
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.servicesItems}
        >
          <div className={styles.grid_container}>
            {servicesItems.map(({ title, description, image, href }, index) => (
              <div
                onClick={() => setActiveIndex(index)}
                key={title}
                className={styles.card}
              >
                <div className={styles.toprow}>
                  <Image src={image} alt='icon' width={60} height={60}/> 
                  <h4 className={styles.toprow__title}>{title}</h4>
                </div>
                <div className={styles.bottomrow}>
                {description.map((el) => (
                  <p key={el} className={styles.bottomrow__text}>{el}</p>
                ))}
                </div>
                {/* <Link href={href}></Link> */}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
