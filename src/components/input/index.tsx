import { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import CrossIcon from '../../assests/input-cross-icon.svg';

const inputVariant = cva(
  [
    'relative',
    'rounded-[10px]',
    'w-[261px]',
    'h-[45px]',
    'p-3',
    'text-base',
    'font-medium',
    'text-body',
    'font-sans',
    'placeholder-black',
    'pt-6',
    'bg-[#F5F8F9]',
  ],
  {
    variants: {
      variant: {
        default: ['text-black'],
        withIcon: ['text-black'],
        redStroke: [
          'border',
          'border-error',
          'border-[0.5px]',
          'placeholder-black',
        ],
        time: ['flex', 'items-center', 'justify-between', 'gap-2', 'w-[75px]'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps extends VariantProps<typeof inputVariant> {
  label?: string;
  placeholder?: string;
  rightIcon?: boolean;
}

const Input = ({
  variant,
  size,
  label,
  placeholder,
  rightIcon,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(e.target.value !== '');
    setIsFocused(false);
  };

  return (
    <div className="relative w-[261px] h-[40px] bg-[#F5F8F9] rounded-[10px]">
      {label && (
        <label
          className="absolute left-3 text-sm font-regular text-label pointer-events-none z-10 font-sans"
          style={{ color: 'rgba(165, 164, 164, 0.5)' }}
        >
          {label}
        </label>
      )}
      <input
        className={clsx(inputVariant({ variant, size }), 'z-0')}
        placeholder={isFocused ? '' : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute right-3 top-[50%] transform -translate-y-[35%] z-10">
          <CrossIcon />
        </div>
      )}
    </div>
  );
};

export default Input;
