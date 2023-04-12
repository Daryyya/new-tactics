import { ICasesData } from "@/utils/cases.data";
import { FC } from "react";
import styles from "./Case.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";

export const Case: FC<Omit<ICasesData, "id" | "status">> = ({
  title,
  description,
  imageUrl,
  results,
}) => {
  return (
    <section className={styles.case}>
      <div className="container">
        <div className={styles.caseBody}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img className={styles.image} src={imageUrl} alt={title} />
          </motion.div>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{title}</h1>
            <p>{description}</p>
            {results.map((result) => (
              <p className={styles.result} key={result}>
                - {result}
              </p>
            ))}
            <Link href="/">Вернуться на главную</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
