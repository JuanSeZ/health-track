import { cva, VariantProps } from 'class-variance-authority';
import ProgressRing from '../../assests/progress-ring.tsx';

const progressVariant = cva(
  [
    'rounded-[14px]',
    'p-[16px]',
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
  icon?: JSX.Element;
}

function getIcon(
  percentage: number | undefined,
  progressColor: string | undefined
) {
  return (
    <div className="flex items-center justify-center">
      <ProgressRing percentage={percentage} color={progressColor} />
    </div>
  );
}

const Progress = ({
  variant,
  percentage,
  backgroundColor,
  progressColor,
  classname,
  icon = getIcon(percentage, progressColor),
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
