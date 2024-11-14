import { cva, VariantProps } from 'class-variance-authority';
import ProgressRing from '../../assests/progress-ring.tsx';
import ProgressBar from '../../assests/progress-bar.tsx';

const progressVariant = cva(
  [
    'rounded-[14px]',
    'p-[16px]',
    'shadow-md',
    'flex',
    'flex-col',
    'justify-between',
    'gap-[8px]',
    'min-w-[350px]',
  ],
  {
    variants: {
      variant: {
        progressRing: ['relative'],
        progressBar: ['relative'],
      },
    },
    defaultVariants: {
      variant: 'progressRing',
    },
  }
);

export interface ProgressProps extends VariantProps<typeof progressVariant> {
  backgroundColor?: string;
  percentage?: number;
  progressColor?: string;
  classname?: string;
  icon?: JSX.Element
}

function getIcon(
  variant: string | null | undefined,
  percentage: number | undefined,
  progressColor: string | undefined
) {
  if (variant === 'progressRing') {
    return (
      <div className="flex items-center justify-center">
        <ProgressRing percentage={percentage} color={progressColor} />
      </div>
    );
  } else if (variant === 'progressBar') {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <ProgressBar percentage={percentage} color={progressColor} />
      </div>
    );
  }
}

const Progress = ({
  variant,
  percentage,
  backgroundColor,
  progressColor,
  classname,
  icon = getIcon(variant, percentage, progressColor)
}: ProgressProps) => {
  return (
    <div
      className={`${progressVariant({ variant })} ${backgroundColor} ${classname}`}
    >
      {icon}
    </div>
  );
};

export default Progress;
