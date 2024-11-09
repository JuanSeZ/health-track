import React, { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import './button.css';

const buttonVariant = cva(
  [
    'storybook-button'
  ],
  {
    variants: {
      variant: {
        primary: ['bg-primary-400 text-white'],
        primaryOutlined: [
          'bg-white text-primary-400 border border-primary-400',
        ],
        primaryDark: ['bg-primary-700 text-white'],
        secondaryOutlined: [
          'bg-white text-secondary-400 border border-secondary-400',
        ],
      },
      size: {
        small: ['storybook-button--small'],
        medium: ['storybook-button--medium'],
        large: ['storybook-button--large'],
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
}

export const Button = ({
                         variant,
                         size,
                         label= "Button",
                         ...rest }: ButtonProps) => {
  return (
    // <button className={buttonVariant({ size, variant })} {...rest} />
    <button
      type="button"
      className={buttonVariant({ size, variant })}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
