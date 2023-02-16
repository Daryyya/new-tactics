import { FC } from "react";

import styles from "./Cases.module.scss";
import { motion } from "framer-motion";
import { ICasesData } from "@/utils/cases.data";
import { useRouter } from "next/router";

const CasesItem: FC<Omit<ICasesData, "description">> = ({
  id,
  results,
  title,
  imageUrl,
  stats,
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.casesItem}
      onClick={() => router.push(`case/${id}`)}
    >
      <img src={imageUrl} alt="кейс" />
      <div className={styles.hoverBlock}>
        <h3>{title}</h3>
        <div className={styles.results}>
          {results.map((result) => (
            <p key={result}>{result}</p>
          ))}
        </div>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <p key={stat}>{stat}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CasesItem;
