import React, { FunctionComponent, HTMLProps } from 'react';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FunctionComponent<ButtonProps> = ({ type, className, children, ...props }) => (
  <button {...props} type={type || 'button'} role="button" className={`${className} p-3 `}>
    {children}
  </button>
);
