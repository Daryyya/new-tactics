import { sendMail } from "@/services/email";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "@/components/ui/Loader/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormContext } from "@/utils/FormCollector/FormContext";
import Radioframe from "../common/RadioFrame/Radioframe";
import RadioInput from "../common/RadioInput/RadioInput";
import {formData} from './formdata';
import styles from "./ThanksForm.module.scss";

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

  const { name, phone } = useContext(FormContext);

  const router = useRouter();

  useEffect(() => {
    if (!name || !phone) {
      router.push("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IThanksParams>({
    mode: "onSubmit",
    defaultValues: { name: name, phone: phone },
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
    sendMail({ ...data, name: name, phone: phone })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        router.push("/success");
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

  const [firstStep, secondStep, thirdStep, fourthStep] = formData;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.thanksForm}>
        <h1 className={styles.title}>
          Спасибо за заявку, <br />
          Обязательно заполните форму ниже
        </h1>
        <Radioframe title={firstStep.question} error="">
          {firstStep.variant.map((variant) => (
            <RadioInput key={variant} {...register("product", { required: true })} text={variant} />
          ))}
        </Radioframe>
        <Radioframe title={secondStep.question} error="">
          {secondStep.variant.map((variant) => (
            <RadioInput key={variant} {...register("optimization", { required: true })} text={variant} />
          ))}
        </Radioframe>
        <Radioframe title={thirdStep.question} error="">
          {thirdStep.variant.map((variant) => (
            <RadioInput key={variant} {...register("budget", { required: true })} text={variant} />
          ))}
        </Radioframe>
        <Radioframe title={fourthStep.question} error="">
          {fourthStep.variant.map((variant) => (
            <RadioInput key={variant} {...register("clientsCount", { required: true })} text={variant} />
          ))}
        </Radioframe>
        {/* TODO: что с политиками?? */}
        {/* <p>
          Нажимая на кнопку &quot;отправить&quot;, вы соглашаетесь с{" "}
          <Link target="_blank" href="/policy">
            Политикой конфиденциальности
          </Link>
        </p> */}
        <button
          disabled={!isValid}
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
