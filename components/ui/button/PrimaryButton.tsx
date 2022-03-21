import React, { FunctionComponent } from 'react';
import { Button, ButtonProps } from './Button';

export const PrimaryButton: FunctionComponent<ButtonProps> = ({ children, ...props }) => (
  <Button {...props} className={`${props.className || ''} bg-primary text-white`}>
    {children}
  </Button>
);
