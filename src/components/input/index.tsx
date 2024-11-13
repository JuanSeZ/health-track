import { InputHTMLAttributes, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import RightArrowIcon from '../../assests/right-arrow-icon.svg';
import CrossIcon from '../../assests/input-cross-icon.svg';

const inputVariant = cva(
  [
    'relative', // Ensure input container is relative
    'rounded-[10px]',
    'w-[261px]', // Width from Figma
    'h-[45px]',
    'p-3',
    'text-base',
    'font-medium',
    'placeholder-black',
    'pt-6',
    'bg-[#F5F8F9]',
  ],
  {
    variants: {
      variant: {
        default: ['text-black'],
        withIcon: ['text-black'], // Add padding for the icon on the right in the new variant
        redStroke: [
          'border',
          'border-error',
          'border-[0.5px]',
          'placeholder-black',
        ], // New variant with red stroke
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps extends VariantProps<typeof inputVariant> {
  label?: string; // Label is optional
  placeholder?: string; // Placeholder is optional
  rightIcon?: boolean; // Right icon for the new variant
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

  // Handle focus and blur events to toggle placeholder visibility
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(e.target.value !== ''); // Only show the placeholder if the input is empty
    setIsFocused(false);
  };

  return (
    <div className="relative w-[261px] h-[40px] bg-[#F5F8F9] rounded-[10px]">
      {label && (
        <label
          className="absolute left-3 text-label font-medium pointer-events-none z-10"
          style={{ color: 'rgba(165, 164, 164, 0.5)' }}
        >
          {label}
        </label>
      )}
      <input
        className={clsx(inputVariant({ variant, size }), 'z-0')}
        placeholder={isFocused ? '' : placeholder} // Hide placeholder on focus
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
