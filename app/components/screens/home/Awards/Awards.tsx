import React from "react";
import styles from "./Awards.module.scss";
import { motion } from "framer-motion";
import { award } from "@/assets/images/home";
import Image from "next/image";

export const Awards = () => {
  return (
    <section className={styles.awards}>
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
            <span>07 |</span> Награды
          </motion.h2>
        </div>
        <div className={styles.awardsBody}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.awardsItem}
          >
            <Image className={styles.image} src={award} alt="award" />
            <h3>За лидерство в разработке и внедрении отечественного программного обеспечения</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
