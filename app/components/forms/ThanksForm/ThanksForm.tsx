import { sendMail } from "@/services/email";
import React, { useRef, useState, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "@/components/ui/Loader/Loader";

import styles from "./ThanksForm.module.scss";
import Success from "@/components/ui/Success/Success";

interface IThanksParams {
  phone: string
  name: string
  sphere: string
  clientsCount: string
  contactPreference: string
  wishes: string
}

const ThanksForm = () => {
  const [radioValue, setRadioValue] = useState("1-10")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm<IThanksParams>()

  const errorInputRef = useRef<any>()

  const onSubmit = (data: any) => {
    setIsLoading(true)
    sendMail({...data, clientsCount: radioValue}).then((res) => {
      console.log(res.data)
      setIsLoading(false)
      setIsSuccess(true)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      setIsError(true)
    }
    )
  }

  useLayoutEffect(() => {
    if(errors.phone || errors.name || errors.clientsCount || errors.contactPreference || errors.sphere || errors.wishes) {
      errorInputRef.current.scrollIntoView()
    }
  }, [])

  if(isLoading) {
    return <Loader />
  }

  if(isSuccess) {
    return <Success />
  }

  if(isError) {
    return <div className={styles.errorScreen}>Произошла непредвиденная ошибка</div>
  }

  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit )} className={styles.thanksForm}>
      <h1 className={styles.title}>
          Спасибо за заявку, <br />
          Обязательно заполните форму ниже
      </h1>
      <div ref={errorInputRef} className={styles.inputBlock}>
        <label className={errors.phone ? `${styles.error}` : ""} htmlFor="phone-input">{errors.phone ? errors.phone?.message : "Контактный телефон"}</label>
        <input
        {...register("phone", { 
          required: "Телефон обязателен для ввода",
          pattern: {
            value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            message: "Некорректный номер телефона",
        },}) }
          id="thanks_phone"
          type="phone"
          placeholder="Введите здесь..."
          name="phone"
        />
      </div>
      <div className={styles.inputBlock}>
        <label className={errors.name ? `${styles.error}` : ""} htmlFor="thanks_name">{errors.name ? errors.name?.message : "Как к вам обращаться?"}</label>
        <input
        {...register("name", {required: "Введите ваше имя!"})}
          id="thanks_name"
          type="text"
          placeholder="Введите здесь..."
          name="name"
        />
      </div>
      <div className={styles.inputBlock}>
        <label className={errors.sphere ? `${styles.error}` : ""} htmlFor="thanks_sphere">{errors.sphere ? errors.sphere?.message : "Сфера деятельности компании"}</label>
        <input
        {...register("sphere", {required: "Укажите сферу деятельности вашей компании"})}
          id="thanks_sphere"
          type="phone"
          placeholder="Введите здесь..."
          name="sphere"
        />
      </div>
      <div className={styles.inputBlock}>
        <label className={errors.contactPreference ? `${styles.error}` : ""} htmlFor="thanks_preference">{errors.contactPreference ? errors.contactPreference?.message : "Предпочтительный вид связи"}</label>
        <input
        {...register("contactPreference", {required: "Укажите удобный вам вид связи"})}
          id="thanks_preference"
          type="text"
          placeholder="Введите здесь..."
          name="contactPreference"
        />
      </div>
      <fieldset {...register("clientsCount")} className={styles.radioInputs}>
        <legend>Сколько человек будут пользоваться сервисом?</legend>

        <div className={styles.items}>
          <div onClick={() => setRadioValue("1-10")}>
            <input type="radio" id="low" name="drone" value="1-10" />
            <label htmlFor="low">1-10</label>
          </div>

          <div onClick={() => setRadioValue("10-100")}>
            <input type="radio" id="mid" name="drone" value="dew10ey" />
            <label htmlFor="mid">10-100</label>
          </div>

          <div onClick={() => setRadioValue("100-1000")}>
            <input type="radio" id="high" name="drone" value="louie" />
            <label htmlFor="high">100-1000</label>
          </div>

          <div onClick={() => setRadioValue("1000 и более")}>
            <input type="radio" id="extra-high" name="drone" value="louie" />
            <label htmlFor="extra-high">1000 и более</label>
          </div>
        </div>
      </fieldset>
      <div className={styles.inputBlock}>
        <label className={errors.wishes ? `${styles.error}` : ""} htmlFor="wishes">
          {errors.wishes ? errors.wishes?.message : "Пожелания по проекту"}
        </label>
       <textarea {...register("wishes")} name="wishes" id="wishes" 
       placeholder="
       Введите здесь" /> 
      </div>
      <button disabled={errors.phone || errors.name || errors.clientsCount || errors.contactPreference || errors.sphere || errors.wishes ? true : false } className={styles.submitBtn} type="submit">
        Отправить
      </button>
    </form>
    </>
    
  );
};

export default ThanksForm;
