import { FC } from "react";
import styles from "./Cases.module.scss";
import { motion } from "framer-motion";

import { casesData } from "@/utils/cases.data";
import CasesItem from "./CasesItem";

const Cases: FC = () => {
  return (
    <section id="cases" className={styles.cases}>
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
          {casesData.map((item) => (
            <CasesItem
              key={item.id}
              id={item.id}
              title={item.title}
              results={item.results}
              stats={item.stats}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
