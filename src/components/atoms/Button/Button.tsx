"use client"

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...rest }) => {

  return (
    <button className={`button button-${variant} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
