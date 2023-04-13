import { FC } from "react";

import styles from "../UniqeCase.module.scss";
import { motion } from "framer-motion";
import { ICasesData } from "@/utils/cases.data";
import { useRouter } from "next/router";

const CasesItem: FC<Omit<ICasesData, "description">> = ({
  id,
  results,
  title,
  imageUrl,
  status,
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.casesItem}
      onClick={() => router.push(`case-${id}`)}
    >
      <img src={imageUrl} alt="кейс" />
      <div className={styles.hoverBlock}>
        <h3>{title}</h3>
        <div className={styles.results}>
          {results.map((result) => (
            <p key={result}>{result}</p>
          ))}
        </div>
        <div className={styles.status}>
          {status.map((status) => (
            <p key={status}>{status}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CasesItem;
