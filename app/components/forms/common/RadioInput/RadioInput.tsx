import React, { forwardRef, InputHTMLAttributes } from "react";
import s from "./RadioInput.module.scss";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> {
  text: string;
}

// eslint-disable-next-line react/display-name
const RadioInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { text, ...restProps } = props;
  return (
    <label className={s.check}>
      <input
        ref={ref}
        className={s.check__input}
        type="radio"
        value={text}
        {...restProps}
      />
      <span className={s.check__box}></span>
      {text}
    </label>
  );
});

export default RadioInput;
