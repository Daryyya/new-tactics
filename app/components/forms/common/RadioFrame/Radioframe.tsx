import { error } from 'console';
import React, { FC, ReactNode } from 'react'
import s from './RadioFrame.module.scss';

interface Props {
    children: ReactNode;
    className?: string;
    title: string;
    error: string;
}

const Radioframe:FC<Props> = ({children, className = '', title, error}) => {
  return (
    <fieldset className={`${s.wrapper} ${className}`}>
        <legend className={s.title}>
            {title}
            <span className={s.error}>{error}</span>
        </legend>
        <div>
            {children}
        </div>
    </fieldset>
  )
}

export default Radioframe
