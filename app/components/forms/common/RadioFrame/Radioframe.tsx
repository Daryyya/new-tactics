import React, { FC, ReactNode } from "react";
import s from "./RadioFrame.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  title: string;
  hasError: boolean;
}

const Radioframe: FC<Props> = ({ children, className = "", title, hasError }) => {
  return (
    <fieldset className={`${s.wrapper} ${className}`}>
      <legend className={s.title}>
        {title}
        {hasError && (
          <span className={s.error}>Выберите вариат ответа</span>
        )}
      </legend>
      <div>{children}</div>
    </fieldset>
  );
};

export default Radioframe;
