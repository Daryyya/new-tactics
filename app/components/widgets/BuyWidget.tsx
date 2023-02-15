import { closeSvg } from "@/assets/images/modals";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import styles from "./BuyWidget.module.scss";

import { motion } from "framer-motion";
import { sendSvg } from "@/assets/images/widgets";

export const BuyWidget: FC = () => {
  const [isOpenBlock, setIsOpenBlock] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpenBlock(true);
    }, 5000);
  }, []);

  const handleClickClose = () => {
    setIsOpenBlock(false);
    localStorage.setItem("closeWidget", "yes");
  };
  return (
    <>
      {isOpenBlock && localStorage.getItem("closeWidget") !== "yes" ? (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className={styles.buy}
        >
          <div className="container">
            <div className={styles.buyBody}>
              <div className={styles.buyTop}>
                <h3>Воспользуйтесь нашими услугами по специальным условиям!</h3>
                <button onClick={() => handleClickClose()}>
                  <Image src={closeSvg} alt="закрыть" />
                </button>
              </div>
              <div className={styles.action}>
                <form>
                  <div className={styles.inputBlock}>
                    <label htmlFor="email">Ваш email</label>
                    <input
                      placeholder="Введите здесь..."
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className={styles.inputBlock}>
                    <label htmlFor="name">Полное имя</label>
                    <input
                      placeholder="Введите здесь..."
                      type="text"
                      id="name"
                    />
                  </div>
                  <button type="submit">
                    <Image src={sendSvg} alt="отправить" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};
