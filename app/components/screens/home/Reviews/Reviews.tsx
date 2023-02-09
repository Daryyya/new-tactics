import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./Reviews.module.scss";
import Image from "next/image";
import { reviewImage, yandexLogo } from "@/assets/images/home";

export const Reviews: FC = () => {
  return (
    <section className={styles.reviews}>
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
            <span>09 |</span> Отзывы
          </motion.h2>
        </div>
        <div className={styles.reviewsBody}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.review}
          >
            <div className={styles.reviewTop}>
              <div className={styles.reviewer}>
                <Image src={reviewImage} alt="клиент" />
                <h4>Светлана Смирнова</h4>
              </div>
              <button>
                <span>Смотреть отзыв</span>
                <Image src={yandexLogo} alt="Яндекс" />
              </button>
            </div>
            <div className={styles.reviewsContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.review}
          >
            <div className={styles.reviewTop}>
              <div className={styles.reviewer}>
                <Image src={reviewImage} alt="клиент" />
                <h4>Светлана Смирнова</h4>
              </div>
              <button>
                <span>Смотреть отзыв</span>
                <Image src={yandexLogo} alt="Яндекс" />
              </button>
            </div>
            <div className={styles.reviewsContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
