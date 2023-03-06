import { FC } from "react";
import styles from "./DiscussForm.module.scss";

import { useForm } from "react-hook-form";

import { IDiscussParams } from "@/types/discuss";
import { useRouter } from "next/router";

export const DiscussForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDiscussParams>();

  const router = useRouter();

  const onSubmit = (data: IDiscussParams) => {
    console.log(data);
    router.push("/thanks");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBlock}>
        <label
          className={errors.phone ? `${styles.error}` : ""}
          htmlFor="phone"
        >
          {errors.phone ? errors.phone?.message + "*" : "Контактный телефон"}
        </label>
        <input
          {...register("phone", {
            required: "Телефон обязателен для ввода",
            pattern: {
              value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
              message: "Некорректный номер телефона",
            },
          })}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Введите здесь"
          aria-invalid={errors.phone ? true : false}
        />
      </div>
      <div className={styles.inputBlock}>
        <label className={errors.name ? `${styles.error}` : ""} htmlFor="name">
          {errors.name ? errors.name?.message + "*" : "Ваше полное имя"}
        </label>
        <input
          {...register("name", {
            required: "Укажите ваше полное имя",
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]{3,}/,
              message: "Некорректное имя",
            },
          })}
          type="text"
          id="name"
          name="name"
          placeholder="Введите здесь"
          aria-invalid={errors.name ? true : false}
        />
      </div>
      <div className={styles.inputBlock}>
        <label
          className={errors.message ? `${styles.error}` : ""}
          htmlFor="message"
        >
          {errors.message
            ? errors.message?.message + "*"
            : "Опишите ваш проект"}
        </label>
        <textarea
          {...register("message", {
            required: "Опишите, пожалуйста, ваш проект",
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]{3,}/,
              message: "Некорректное описание",
            },
          })}
          name="message"
          id="message"
          placeholder="Введите здесь"
          aria-invalid={errors.message ? true : false}
        ></textarea>
      </div>
      <button
        className={styles.submitBtn}
        disabled={errors.phone || errors.name || errors.message ? true : false}
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};
