import { cva, VariantProps } from 'class-variance-authority';

const cardButtonVariant = cva(
  [
    'justify-items-center',
    'content-center',
    'w-[54.4px]',
    'flex',
    'flex-col',
    'items-center',
    'gap-[15px]',
    'h-[100px]',
    'overflow-hidden',
    'rounded-[27px]',
    'relative',
    "[font-family:'Montserrat-Light',Helvetica]",
    'pt-[16px] pb-[12.94px] px-[15px]',
  ],
  {
    variants: {
      variant: {
        selected: ['bg-primary-400'],
        unselected: ['bg-primary-300'],
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  }
);

const numberVariant = cva(
  [
    'text-[30px]',
    'tracking-[0]',
    'relative',
    'h-[30px]',
    'font-normal',
    'text-center',
    'font-light',
    "[font-family:'Montserrat-Light',Helvetica]",
  ],
  {
    variants: {
      variant: {
        selected: ['text-white'],
        unselected: ['text-primary-700'],
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  }
);

const dayNameVariant = cva(
  [
    'relative',
    'text-[23px]',
    'content-center',
    'justify-items-center',
    'tracking-[0]',
    'h-[11px]',
    'leading-[normal]',
    "[font-family:'Montserrat-Light']",
  ],
  {
    variants: {
      variant: {
        selected: ['text-primary-600 font-light'],
        unselected: ['text-primary-700 font-extralight'],
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  }
);

export interface CalendarDateProps
  extends VariantProps<typeof cardButtonVariant> {
  number: string;
  dayName: string;
}

export const CalendarDate = ({
  number,
  dayName,
  variant,
}: CalendarDateProps) => {
  return (
    <div className={cardButtonVariant({ variant })}>
      <div className={numberVariant({ variant })}>{number}</div>

      <div className={dayNameVariant({ variant })}>{dayName}</div>
    </div>
  );
};
