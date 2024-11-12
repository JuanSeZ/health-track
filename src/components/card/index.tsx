import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Button from '../button';
import ProgressRing from '../../assests/progress-ring.tsx';
import ProgressBar from '../../assests/progress-bar.tsx';

const cardVariant = cva(
  [
    'rounded-[14px]',
    'p-[16px]',
    'shadow-md',
    'flex',
    'flex-col',
    'justify-between',
    'gap-[8px]',
    'bg-white',
    'w-full',
  ],
  {
    variants: {
      variant: {
        default: ['border', 'border-gray-300'],
        progressRing: ['border', 'border-primary-400', 'relative'],
        progressBar: ['border', 'border-secondary-400', 'relative'],
        pill: [
          'bg-primary-100',
          'text-primary-400',
          'rounded-full',
          'px-4',
          'py-2',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps extends VariantProps<typeof cardVariant> {
  title: string;
  subtitle?: string;
  description?: string;
  percentage?: number;
  progressColor?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

const Card = ({
  variant,
  size,
  title,
  subtitle,
  description,
  percentage,
  progressColor,
  icon,
  action,
}: CardProps) => {
  return (
    <div className={`${cardVariant({ size, variant })}`}>
      <div className="flex flex-row">
        <div className="flex items-center justify-center">
          {variant === 'progressRing' && (
            <ProgressRing percentage={percentage} color={progressColor} />
          )}
        </div>

        <div className="flex flex-col gap-2 max-h-fit px-2.5 py-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{title}</h3>
              {subtitle && (
                <h4 className="text-sm text-gray-500">{subtitle}</h4>
              )}
            </div>
            {icon && <div className="icon">{icon}</div>}
          </div>
          {description && (
            <div className="text-sm text-gray-500 text-left">{description}</div>
          )}
          {action && (
            <div className="ml-auto">
              <Button label="Add" />
            </div>
          )}
        </div>
      </div>

      {variant === 'progressBar' && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <ProgressBar percentage={percentage} color={progressColor} />
        </div>
      )}
    </div>
  );
};

export default Card;
