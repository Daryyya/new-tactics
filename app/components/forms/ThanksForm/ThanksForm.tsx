import { sendMail } from "@/services/email";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "@/components/ui/Loader/Loader";

import Link from "next/link";

import styles from "./ThanksForm.module.scss";
import { useRouter } from "next/router";
import { FormContext } from "@/utils/FormCollector/FormContext";

interface IThanksParams {
  phone: string;
  name: string;
  clientsCount: string;
  contactPreference: string;
  wishes: string;
  product: string;
  optimization: string;
  budget: string;
}

const ThanksForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { name, description, phone } = useContext(FormContext);

  const router = useRouter();

  useEffect(() => {
    if (!name || !description || !phone) {
      router.push("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IThanksParams>({
    mode: "onSubmit",
    defaultValues: { name: name, phone: phone, wishes: description },
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
    sendMail({ ...data })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        <div className={styles.errorScreen}>
          Произошла непредвиденная ошибка
        </div>
        <Link className={styles.homeLink} href="/">
          Вернуться на главную
        </Link>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.thanksForm}>
        <h1 className={styles.title}>
          Спасибо за заявку, <br />
          Обязательно заполните форму ниже
        </h1>
        <div className={styles.inputBlock}>
          <label
            className={errors.phone ? `${styles.error}` : ""}
            htmlFor="phone-input"
          >
            {errors.phone ? errors.phone?.message : "Контактный телефон"}
          </label>
          <input
            {...register("phone", {
              required: "Телефон обязателен для ввода",
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: "Некорректный номер телефона",
              },
            })}
            id="thanks_phone"
            type="phone"
            placeholder="Введите здесь..."
            name="phone"
          />
        </div>
        <div className={styles.inputBlock}>
          <label
            className={errors.name ? `${styles.error}` : ""}
            htmlFor="thanks_name"
          >
            {errors.name ? errors.name?.message : "Как к вам обращаться?"}
          </label>
          <input
            {...register("name", { required: "Введите ваше имя!" })}
            id="thanks_name"
            type="text"
            placeholder="Введите здесь..."
            name="name"
          />
        </div>
        <fieldset className={styles.radioInputs}>
          <legend>Что необходимо разработать?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("product")}
                type="radio"
                value="Мобильное приложение"
                id="mobile-app"
              />
              <label htmlFor="mobile-app">Мобильное приложение</label>
            </div>
            <div>
              <input
                {...register("product")}
                type="radio"
                value="CRM/EPR система"
                id="crm"
              />
              <label htmlFor="crm">CRM/EPR систему</label>
            </div>
            <div>
              <input
                {...register("product")}
                type="radio"
                value="Мобильное приложение"
                id="e-commerce-portal"
              />
              <label htmlFor="e-commerce-portal">Корпоративный портал</label>
            </div>
            <div>
              <input type="texo />
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.radioInputs}>
          <legend>Какие участки учета хотите оптимизировать?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("optimization")}
                type="radio"
                id="automatization"
                value="Полная автоматизация бизнеса"
              />
              <label htmlFor="automatization">
                Полная автоматизация бизнеса
              </label>
            </div>
            <div>
              <input
                {...register("optimization")}
                type="radio"
                value="Управление финансами"
                id="finance"
              />
              <label htmlFor="finance">Управление финансами</label>
            </div>
          </div>
        </fieldset>
        <div className={styles.inputBlock}>
          <label
            className={errors.contactPreference ? `${styles.error}` : ""}
            htmlFor="thanks_preference"
          >
            {errors.contactPreference
              ? errors.contactPreference?.message
              : "Предпочтительный вид связи"}
          </label>
          <input
            {...register("contactPreference", {
              required: "Укажите удобный вам вид связи",
            })}
            id="thanks_preference"
            type="text"
            placeholder="Введите здесь..."
            name="contactPreference"
          />
        </div>
        <fieldset className={styles.radioInputs}>
          <legend>Какой у вас бюджет?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("budget")}
                value="100 000"
                type="radio"
                id="start-b"
              />
              <label htmlFor="start-b">100 000 рублей</label>
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.radioInputs}>
          <legend>Сколько человек будут пользоваться сервисом?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("clientsCount")}
                type="radio"
                id="low"
                value="1-10"
              />
              <label htmlFor="low">1-10</label>
            </div>

            <div>
              <input
                {...register("clientsCount")}
                type="radio"
                id="mid"
                value="10-100"
              />
              <label htmlFor="mid">10-100</label>
            </div>

            <div>
              <input
                {...register("clientsCount")}
                type="radio"
                id="high"
                value="100-1000"
              />
              <label htmlFor="high">100-1000</label>
            </div>

            <div>
              <input
                {...register("clientsCount")}
                type="radio"
                id="extra-high"
                value="1000 и более"
              />
              <label htmlFor="extra-high">1000 и более</label>
            </div>
          </div>
        </fieldset>
        <div className={styles.inputBlock}>
          <label
            className={errors.wishes ? `${styles.error}` : ""}
            htmlFor="wishes"
          >
            {errors.wishes ? errors.wishes?.message : "Пожелания по проекту"}
          </label>
          <textarea
            {...register("wishes")}
            name="wishes"
            id="wishes"
            placeholder="
       Введите здесь"
          />
        </div>
        <p>
          Нажимая на кнопку "отправить", вы соглашаетесь с{" "}
          <Link target="_blank" href="/policy">
            Политикой конфиденциальности
          </Link>
        </p>
        <button
          disabled={
            errors.phone ||
            errors.name ||
            errors.clientsCount ||
            errors.contactPreference ||
            errors.wishes
              ? true
              : false
          }
          className={styles.submitBtn}
          type="submit"
        >
          Отправить
        </button>
      </form>
    </>
  );
};

export default ThanksForm;
