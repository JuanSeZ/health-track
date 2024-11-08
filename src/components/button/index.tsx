import { ButtonHTMLAttributes } from 'react';
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
    VariantProps<typeof buttonVariant> {}

const Button = ({ variant, size, ...rest }: ButtonProps) => {
  return <button className={buttonVariant({ size, variant })} {...rest} />;
};

export default Button;
