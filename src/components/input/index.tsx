import { InputHTMLAttributes, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import RightArrowIcon from '../../assests/right-arrow-icon.svg';
import CrossIcon from '../../assests/input-cross-icon.svg';

const inputVariant = cva(
  [
    'relative',            // Ensure input container is relative
    'rounded-[10px]',
    'w-[261px]',  // Width from Figma
    'h-[40px]',
    'p-3',
    'text-base',
    'font-medium',
    'bg-[#F5F8F9]',
    'placeholder-black',
    'font-montserrat',
  ],
  {
    variants: {
      variant: {
        default: ['text-black'],
        withIcon: ['text-black'], // Add padding for the icon on the right in the new variant
        redStroke: ['border', 'border-error', 'border-[0.5px]', 'placeholder-black'], // New variant with red stroke
        time: ['flex', 'items-center', 'justify-between', 'gap-2'], // Time variant with flex layout
      },
      size: {
        small: ['h-[35px]', 'pt-6'],  // Adjust padding to accommodate label
        medium: ['h-[45px]', 'pt-6'],
        large: ['h-[55px]', 'pt-7'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  },
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {
  label?: string;   // Label is optional
  placeholder?: string;  // Placeholder is optional
  rightIcon: boolean;  // Right icon for the new variant
  duration?: string;
}

const Input = ({
                 variant = 'default',
                 size,
                 label,
                 placeholder,
                 rightIcon,
                 duration,
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

  const [isFocusedStart, setIsFocusedStart] = useState(false);
  const [isFocusedEnd, setIsFocusedEnd] = useState(false);

  const handleFocusStart = () => {
    setIsFocusedStart(true);
  };

  const handleBlurStart = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocusedStart(e.target.value !== '');
  };

  const handleFocusEnd = () => {
    setIsFocusedEnd(true);
  };

  const handleBlurEnd = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocusedEnd(e.target.value !== '');
  };
  return (
    <div className="relative w-[261px] h-[40px]">
      {label && (
        <label
          className="absolute top-[1px] left-3 text-sm font-medium pointer-events-none z-10 font-montserrat"
          style={{ color: 'rgba(165, 164, 164, 0.5)' }}
        >
          {label}
        </label>
      )}
      {variant === 'time' ? (
        <div className="flex items-center justify-between w-full h-full">
          {/*// time variant is not really working*/}
          <input
            className={clsx(inputVariant({ variant, size }), 'font-montserrat flex-1')}
            placeholder={isFocusedStart ? '' : 'Start'}
            onFocus={handleFocusStart}
            onBlur={handleBlurStart}
            {...rest}
          />
          <div className="text-black flex-shrink-0 mx-2">
            <RightArrowIcon />
          </div>
          <input
            className={clsx(inputVariant({ variant, size }), 'font-montserrat flex-1')}
            placeholder={isFocusedEnd ? '' : 'End'}
            onFocus={handleFocusEnd}
            onBlur={handleBlurEnd}
            {...rest}
          />
          <div className="text-black font-montserrat ml-2">{duration || '00:00'}</div>
        </div>
      ) : (
        <input
          className={clsx(inputVariant({ variant, size }), 'z-0')}
          placeholder={isFocused ? '' : placeholder} // Hide placeholder on focus
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      )}
      {rightIcon && (
        <div className="absolute right-3 top-[50%] transform -translate-y-[50%] z-10">
          <CrossIcon />
        </div>
      )}
    </div>
  );
};


export default Input;
