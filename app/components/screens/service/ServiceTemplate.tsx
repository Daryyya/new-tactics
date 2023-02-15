import Link from "next/link";
import { FC, useState } from "react";
import Discuss from "../modals/Discuss/Discuss";
import styles from "./ServiceTemplate.module.scss";

import { motion } from "framer-motion";

interface IServiceTemplate {
  title: string;
  description: string;
  label: string;
  mainContent: string;
  programProducts: string[];
}

export const ServiceTemplate: FC<IServiceTemplate> = ({
  label,
  title,
  description,
  mainContent,
  programProducts,
}) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <section className={styles.service}>
        <div className="container">
          <div className={styles.serviceBody}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.serviceInfo}
            >
              <div className={styles.serviceInfoLabel}>
                <p>Услуги - {label}</p>
                <Link href="/">На главную</Link>
              </div>
              <h1>{title}</h1>
              <div className={styles.programProducts}>
                <h3>Программные продукты</h3>
                {programProducts.map((product) => (
                  <p key={product}>- {product}</p>
                ))}
              </div>

              <p>{description}</p>
              <p className={styles.mainContent}>{mainContent}</p>
              <button
                onClick={() => {
                  setIsOpenPopup(true);
                }}
              >
                Обсудить проект
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {isOpenPopup ? <Discuss setOpenPopup={setIsOpenPopup} /> : null}
    </>
  );
};
