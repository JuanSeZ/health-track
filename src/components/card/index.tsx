import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Button from '../button';
import ProgressRing from '../../assests/progress-ring.tsx';
import PlusIcon from '../../assests/plus-icon.tsx';
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
    'w-[350px]',
  ],
  {
    variants: {
      variant: {
        default: [],
        progressRing: ['relative'],
        progressBar: ['relative'],
        pill: [
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
  title?: string;
  subtitle?: string;
  headerColor?: string;
  description?: string;
  descriptionColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  iconBackgroundColor?: string;
  percentage?: number;
  progressColor?: string;
  buttonVariant?:
    | 'primary'
    | 'primaryOutlined'
    | 'primaryDark'
    | 'secondaryOutlined';
  icon?: ReactNode;
  action?: ReactNode;
}

const Card = ({
  variant,
  title,
  subtitle,
  headerColor,
  description,
  descriptionColor,
  percentage,
  backgroundColor,
  iconColor,
  iconBackgroundColor,
  progressColor,
  buttonVariant,
  icon,
  action,
}: CardProps) => {
  return (
    <div className={`${cardVariant({ variant })} ${backgroundColor}`}>
      <div className="flex flex-row">
        <div className="flex items-center justify-center">
          {variant === 'progressRing' && (
            <ProgressRing percentage={percentage} color={progressColor} />
          )}
        </div>

        {(title || description) && (
          <div
            className={`flex ${variant === 'pill' ? 'flex-row items-center justify-between' : 'flex-col gap-5'} max-h-fit px-2.5 py-2 w-full`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                {title && (
                  <text
                    className={`${variant === 'pill' || variant === 'default' ? 'text-h4' : 'text-h3'} text-${headerColor}`}
                  >
                    {title}
                  </text>
                )}
                {variant !== 'pill' && subtitle && (
                  <text className={`text-h6 text-left text-${headerColor}`}>
                    {subtitle}
                  </text>
                )}
              </div>
              {variant !== 'pill' && icon && (
                <div
                  className={`icon ${iconBackgroundColor} w-[54px] h-[54px] rounded-full flex items-center justify-center`}
                >
                  {icon}
                </div>
              )}
            </div>
            {variant !== 'pill' && description && (
              <div className={`text-left text-m1 text-${descriptionColor}`}>
                {description}
              </div>
            )}
            {action && (
              <div className={`${variant === 'pill' ? 'ml-0' : 'ml-auto'}`}>
                <Button
                  label="Add"
                  leftIcon={<PlusIcon color={iconColor} />}
                  variant={buttonVariant}
                  size="medium"
                />
              </div>
            )}
          </div>
        )}
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
