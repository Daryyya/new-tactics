import ThanksForm from "@/components/forms/ThanksForm/ThanksForm";
import React from "react";

import styles from "./Thanks.module.scss";

const ThanksPage = () => {
  return (
    <section className={styles.thanks}>
      <div className="container">
        <ThanksForm />
      </div>
    </section>
  );
};

export default ThanksPage;
