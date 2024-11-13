import { cva, VariantProps } from 'class-variance-authority';
import CloseRound from '/src/assests/close-round-light.svg';
import Check from '/src/assests/check.svg';
import ErrorToastIcon from '/src/assests/error-toast-icon.svg';
const cardButtonVariant = cva(
  [
    'w-[343px]',
    'h-[83px]',
    'rounded-[12px]',
    'border-[1px]',
    'box-shadow-[3px]',
    'flex',
    'justify-between',
    'items-center', // Centers vertically
  ],
  {
    variants: {
      variant: {
        success: ['border-tertiary-600 bg-tertiary-100'],
        error: ['border-error_border bg-error_bg'],
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  }
);

export type ToastsProps = VariantProps<typeof cardButtonVariant>;

export const Toasts = ({ variant }: ToastsProps) => {
  return (
    <div className={cardButtonVariant({ variant })}>
      <div className="flex items-center gap-[8px] ml-[10px]">
        {' '}
        {/* Wrap icon and text together */}
        {variant === 'success' ? (
          <Check className="stroke-white mb-5" />
        ) : (
          <ErrorToastIcon className="stroke-white mb-5" />
        )}
        <div className="flex flex-col gap-[2px]">
          {' '}
          {/* Reduced gap */}
          <div className="font-semibold text-body">Title</div>
          <div className="font-light text-m1">Description</div>
        </div>
      </div>
      <div className="mr-[19px] mt-[18px] mb-[41px] fill-black flex justify-end">
        <CloseRound />
      </div>
    </div>
  );
};
