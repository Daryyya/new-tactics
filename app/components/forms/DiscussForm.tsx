import { FC, useContext } from "react";
import styles from "./DiscussForm.module.scss";

import { useForm } from "react-hook-form";

import { IDiscussParams } from "@/types/discuss";
import { useRouter } from "next/router";
import { FormContext } from "@/utils/FormCollector/FormContext";

export const DiscussForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDiscussParams>({ mode: "onChange" });

  const { setForm } = useContext(FormContext);

  const router = useRouter();

  const onSubmit = (data: IDiscussParams) => {
    setForm(data);
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
          className={errors.description ? `${styles.error}` : ""}
          htmlFor="description"
        >
          {errors.description
            ? errors.description?.message + "*"
            : "Опишите ваш проект"}
        </label>
        <textarea
          {...register("description", {
            required: "Опишите, пожалуйста, ваш проект",
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]{3,}/,
              message: "Некорректное описание",
            },
          })}
          name="description"
          id="description"
          placeholder="Введите здесь"
          aria-invalid={errors.description ? true : false}
        ></textarea>
      </div>
      <button
        className={styles.submitBtn}
        disabled={
          errors.phone || errors.name || errors.description ? true : false
        }
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};
