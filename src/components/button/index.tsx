import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariant = cva(
  [
    'rounded-[14px]',
    'p-[12px_16px]',
    'flex',
    'justify-center',
    'items-center',
    'gap-[8px]',
    'flex-shrink-0',
    'text-body-bold',
    'font-sans',
    'font-bold'
  ],
  {
    variants: {
      variant: {
        primary: ['bg-primary-600 text-white'],
        primaryOutlined: ['text-primary-600 border border-primary-600'],
        primaryDark: ['bg-primary-900 text-white'],
        secondaryOutlined: ['text-secondary-400 border border-secondary-400'],
      },
      size: {
        small: ['w-[100px]', 'h-[35px]'],
        medium: ['w-[150px]', 'h-[45px]'],
        large: ['w-[200px]', 'h-[55px]'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  label: string;
  leftIcon?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  variant,
  size,
  label,
  leftIcon,
  onClick,
  ...rest
}: ButtonProps) => {
  let iconColor;
  if (variant === 'primaryOutlined') {
    iconColor = '#057D9F';
  } else if (variant === 'secondaryOutlined') {
    iconColor = '#FF8100';
  } else {
    iconColor = 'white';
  }

  return (
    <button
      className={buttonVariant({ size, variant })}
      onClick={onClick}
      {...rest}
    >
      {leftIcon &&
        React.cloneElement(leftIcon as React.ReactElement, {
          color: iconColor,
        })}
      {label}
    </button>
  );
};

export default Button;
