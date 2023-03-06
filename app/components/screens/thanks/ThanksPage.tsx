import ThanksForm from "@/components/forms/ThanksForm/ThanksForm";
import React from "react";

import styles from "./Thanks.module.scss";

const ThanksPage = () => {
  return (
    <section className={styles.thanks}>
      <div className="container">
        <h1 className={styles.title}>
          Спасибо за заявку, <br />
          Обязательно заполните форму ниже
        </h1>
        <ThanksForm />
      </div>
    </section>
  );
};

export default ThanksPage;
