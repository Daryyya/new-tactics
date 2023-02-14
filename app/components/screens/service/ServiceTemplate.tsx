import Link from "next/link";
import { FC, useState } from "react";
import Discuss from "../modals/Discuss/Discuss";
import styles from "./ServiceTemplate.module.scss";

import { motion } from "framer-motion";

interface IServiceTemplate {
  title: string;
  description: string;
  label: string;
}

export const ServiceTemplate: FC<IServiceTemplate> = ({
  label,
  title,
  description,
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
              <p>{description}</p>
              <button
                onClick={() => {
                  setIsOpenPopup(true);
                }}
              >
                Обсудить проект
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.serviceAction}
            >
              <h2>Расскажите о вашем проекте</h2>
              <p>И мы подберем для вас лучшее решение!</p>
              <button>Скачать бриф на разработку проекта</button>
            </motion.div>
          </div>
        </div>
      </section>
      {isOpenPopup ? <Discuss setOpenPopup={setIsOpenPopup} /> : null}
    </>
  );
};
