import { FC } from "react";

import styles from "./Cases.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { ICasesData } from "@/utils/cases.data";
import { useRouter } from "next/router";

const CasesItem: FC<ICasesData> = ({ id, title, description, imageUrl }) => {
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
        <p>{description}</p>
        <button>Перейти к проекту</button>
      </div>
    </motion.div>
  );
};

export default CasesItem;
