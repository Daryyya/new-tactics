import { sendMail } from "@/services/email";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "@/components/ui/Loader/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormContext } from "@/utils/FormCollector/FormContext";
import Radioframe from "../common/RadioFrame/Radioframe";
import RadioInput from "../common/RadioInput/RadioInput";
import { formData } from "./formdata";
import styles from "./ThanksForm.module.scss";

export interface IThanksParams {
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
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleNextClick = () => {
    if (currentStep !== formData.length) {
      setCurrentStep((p) => p + 1);
    }
  };

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.thanksForm}>
        <h1 className={styles.title}>
          Спасибо за заявку, <br />
          Обязательно заполните форму ниже
        </h1>
        {formData.map(({ step, question, variant, fieldName }) => {
          if (step !== currentStep) {
            return null;
          }
          return (
            <Radioframe key={step} title={question} hasError step={step}>
              {/* hasError={!!errors[fieldName]'} */}
              <div className={styles.variants}>
                {variant.map((variant) => (
                  <RadioInput
                    key={variant}
                    {...register(fieldName, { required: true })}
                    text={variant}
                  />
                ))}
              </div>

              <button
                className={styles.nextBtn}
                disabled={!isValid}
                onClick={handleNextClick}
                type={currentStep === formData.length ? "submit" : "button"}
              >
                Далее
              </button>
            </Radioframe>
          );
        })}
        {/* TODO: что с политиками?? */}
        {/* <p>
          Нажимая на кнопку &quot;отправить&quot;, вы соглашаетесь с{" "}
          <Link target="_blank" href="/policy">
            Политикой конфиденциальности
          </Link>
        </p> */}
      </form>
    </>
  );
};

export default ThanksForm;
