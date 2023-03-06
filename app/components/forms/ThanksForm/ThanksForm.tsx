import React from "react";

import styles from "./ThanksForm.module.scss";

const ThanksForm = () => {
  return (
    <form className={styles.thanksForm}>
      <div className={styles.inputBlock}>
        <label htmlFor="phone-input">Контактный телефон</label>
        <input
          id="thanks_phone"
          type="phone"
          placeholder="Введите здесь..."
          name="phone"
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="phone-input">Контактный телефон</label>
        <input
          id="thanks_name"
          type="text"
          placeholder="Введите здесь..."
          name="name"
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="phone-input">Контактный телефон</label>
        <input
          id="thanks_sphere"
          type="phone"
          placeholder="Введите здесь..."
          name="sphere"
        />
      </div>
      <fieldset className={styles.radioInputs}>
        <legend>Сколько человек будут пользоваться сервисом?</legend>

        <div className={styles.items}>
          <div>
            <input type="radio" id="low" name="drone" value="huey" checked />
            <label htmlFor="huey">10-100</label>
          </div>

          <div>
            <input type="radio" id="mid" name="drone" value="dewey" />
            <label htmlFor="dewey">10-100</label>
          </div>

          <div>
            <input type="radio" id="high" name="drone" value="louie" />
            <label htmlFor="louie">100-1000</label>
          </div>

          <div>
            <input type="radio" id="extra-high" name="drone" value="louie" />
            <label htmlFor="extra-high">1000 и более</label>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ThanksForm;
