import Link from "next/link";
import { FC, useState } from "react";
import Discuss from "../modals/Discuss/Discuss";
import styles from "./ServiceTemplate.module.scss";

import { motion } from "framer-motion";

interface IServiceTemplate {
  title: string;
  advertises: string[];
  label: string;
  mainContent: string;
}

export const ServiceTemplate: FC<IServiceTemplate> = ({
  label,
  title,
  advertises,
  mainContent,
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
                <Link href="/#services">На главную</Link>
              </div>
              <h1>{title}</h1>

              {advertises.map((advertise) => (
                <p key={advertise}>- {advertise}</p>
              ))}
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
