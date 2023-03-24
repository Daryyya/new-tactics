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
        <fieldset className={styles.radioInputs}>
          <legend>Что необходимо разработать?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("product", {required: true})}
                type="radio"
                value="Мобильное приложение"
                id="mobile-app"
              />
              <label htmlFor="mobile-app">Мобильное приложение</label>
            </div>
            <div>
              <input
                {...register("product", {required: true})}
                type="radio"
                value="CRM/EPR система"
                id="crm"
              />
              <label htmlFor="crm">CRM/EPR систему</label>
            </div>
            <div>
              <input
                {...register("product", {required: true})}
                type="radio"
                value="Мобильное приложение"
                id="e-commerce-portal"
              />
              <label htmlFor="e-commerce-portal">Корпоративный портал</label>
            </div>
            <div>
              <input
                {...register("product", {required: true})}
                type="radio"
                value="Корпоративный сайт"
                id="e-commerce-site"
              />
              <label htmlFor="e-commerce-site">Корпоративный сайт</label>
            </div>
            <div>
              <input
                {...register("product", {required: true})}
                type="radio"
                value="Интернет-магазин"
                id="e-shop"
              />
              <label htmlFor="e-shop">Интернет-магазин</label>
            </div>
            <div>
              <input
                {...register("product", {required: true})}
                type="radio"
                value="Другое"
                id="other-product"
              />
              <label htmlFor="other-product">Другое</label>
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.radioInputs}>
          <legend>Какие участки учета хотите оптимизировать?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("optimization", {required: true})}
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
                {...register("optimization", {required: true})}
                type="radio"
                value="Управление финансами"
                id="finance"
              />
              <label htmlFor="finance">Управление финансами</label>
            </div>
            <div>
              <input
                {...register("optimization", {required: true})}
                type="radio"
                value="Документооборот"
                id="document-flow"
              />
              <label htmlFor="document-flow">Документооборот</label>
            </div>
            <div>
              <input
                {...register("optimization", {required: true})}
                type="radio"
                value="Складской учет. Управление закупками и продажами"
                id="warehouse-accounting"
              />
              <label htmlFor="warehouse-accounting">
                Складской учет. Управление закупками и продажами
              </label>
            </div>
            <div>
              <input
                {...register("optimization", {required: true})}
                type="radio"
                id="staff"
                value="Персонал: кадры, зарплаты, рекрутинг, аттестация и т.д."
              />
              <label htmlFor="staff">
                Персонал: кадры, зарплаты, рекрутинг, аттестация и т.д.
              </label>
            </div>
            <div>
              <input
                {...register("optimization", {required: true})}
                type="radio"
                id="crm-optimization"
                value="CRM-системы: клиенты, маркетинг, контроль проектов и задач"
              />
              <label htmlFor="crm-optimization">
                CRM-системы: клиенты, маркетинг, контроль проектов и задач
              </label>
            </div>
            <div>
              <input
                {...register("optimization", {required: true})}
                type="radio"
                id="production-control"
                value="Управление производством"
              />
              <label htmlFor="production-control">
                Управление производством
              </label>
            </div>
            <div>
              <input
                {...register("optimization", {required: true})}
                type="radio"
                id="other-optimizations"
                value="Другое"
              />
              <label htmlFor="other-optimizations">Другое</label>
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
                {...register("budget", {required: true})}
                value="100 000"
                type="radio"
                id="start-b"
              />
              <label htmlFor="start-b">100 000 руб</label>
            </div>
            <div>
              <input
                {...register("budget", {required: true})}
                value="300 000"
                type="radio"
                id="start-b2"
              />
              <label htmlFor="start-b2">300 000 руб</label>
            </div>
            <div>
              <input
                {...register("budget", {required: true})}
                value="600 000"
                type="radio"
                id="start-b3"
              />
              <label htmlFor="start-b3">600 000 руб</label>
            </div>
            <div>
              <input
                {...register("budget", {required: true})}
                value="600 000"
                type="radio"
                id="start-b4"
              />
              <label htmlFor="start-b4">1 млн руб</label>
            </div>
          </div>
        </fieldset>
        <fieldset className={styles.radioInputs}>
          <legend>Сколько человек будут пользоваться сервисом?</legend>
          <div className={styles.items}>
            <div>
              <input
                {...register("clientsCount", {required: true})}
                type="radio"
                id="low"
                value="1-10"
              />
              <label htmlFor="low">1-10</label>
            </div>

            <div>
              <input
                {...register("clientsCount", {required: true})}
                type="radio"
                id="mid"
                value="10-100"
              />
              <label htmlFor="mid">10-100</label>
            </div>

            <div>
              <input
                {...register("clientsCount", {required: true})}
                type="radio"
                id="high"
                value="100-1000"
              />
              <label htmlFor="high">100-1000</label>
            </div>

            <div>
              <input
                {...register("clientsCount", {required: true})}
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
            {...register("wishes", {required: true})}
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
