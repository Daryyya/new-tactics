import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./Reviews.module.scss";
import { reviews } from "@/utils/reviews.data";
import ReviewsItem from "./ReviewsItem";

export const Reviews: FC = () => {
  return (
    <section className={styles.reviews}>
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
            <span>09 |</span> Отзывы
          </motion.h2>
        </div>
        <div className={styles.reviewsBody}>
        {reviews.map(item => <ReviewsItem key={item.name} text={item.text} name={item.name} />)}
        </div>
      </div>
    </section>
  );
};
