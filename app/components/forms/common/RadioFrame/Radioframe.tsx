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
        {[1,2,3,4].map(el => (
          <span key={el} className={step === el ? `${s.activeStep} ${s.step}`: `${s.step}`}>
            {el}
          </span>
        ))}
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
