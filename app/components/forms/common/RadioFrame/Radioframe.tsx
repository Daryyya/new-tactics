import React, { FC, ReactNode } from "react";
import s from "./RadioFrame.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  title: string;
  hasError: boolean;
  step: number;
}

const Radioframe: FC<Props> = ({ children, className = "", title, hasError, step }) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <div className={s.steps}>
        <span className={step === 1 ? `${s.activeStep} ${s.step}`: `${s.step}`}>1</span>
        <span className={step === 2 ? `${s.activeStep} ${s.step}`: `${s.step}`}>2</span>
        <span className={step === 3 ? `${s.activeStep} ${s.step}`: `${s.step}`}>3</span>
        <span className={step === 4 ? `${s.activeStep} ${s.step}`: `${s.step}`}>4</span>
      </div>
      <h2 className={s.title}>
        {title}
        {hasError && (
          <span className={s.error}>Выберите вариат ответа</span>
        )}
      </h2>
      {children}
    </div>
  );
};

export default Radioframe;
