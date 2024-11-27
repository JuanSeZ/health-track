import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Button from '../button';
import PlusIcon from '../../assests/plus-icon.tsx';
import ProgressRing from '../../assests/progress-ring.tsx';

const cardVariant = cva(
  [
    'rounded-[14px]',
    'flex',
    'flex-col',
    'justify-between',
    'gap-[4px]',
    'min-w-[350px]',
  ],
  {
    variants: {
      variant: {
        default: [],
        progressRing: ['relative'],
        pill: ['px-4', 'py-2'],
        appointment: [],
        streakMessage: [],
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
  classname?: string;
  callToAction?: any;
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
  classname,
  callToAction,
}: CardProps) => {
  return (
    <div
      className={`${cardVariant({ variant })} ${backgroundColor} ${classname}`}
      style={{
        minWidth: 'unset',
      }}
    >
      {variant === 'streakMessage' ? (
        <div
          className="flex flex-col justify-between items-start p-4 gap-2 rounded-[14px]"
          style={{ width: '169px' }}
        >
          <div className="flex justify-end w-full h-[54px]">
            <div
              className={`icon ${iconBackgroundColor} w-[54px] h-full rounded-full flex items-center justify-center p-2`}
            >
              {icon}
            </div>
          </div>
          <div>
            {description && (
              <p
                className={`text-left text-m1 mt-2 text-${descriptionColor} `}
              >
                {description}
              </p>
            )}
          </div>
          {callToAction && (
            <p className="text-m2 text-left text-black font-medium">
              {callToAction}
            </p>
          )}
        </div>
      ) : variant === 'progressRing' ? (
        <div className="flex w-full gap-3 p-3">
          <div className="flex-shrink-0">
            <ProgressRing color={progressColor} percentage={percentage} />
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col align-bottom">
              {title && (
                <p
                  className={`text-h4 text-${headerColor} font-semibold text-left w-auto leading-tight`}
                >
                  {title}
                </p>
              )}
              {subtitle && (
                <p
                  className={`text-m1 text-${headerColor} text-left w-auto leading-tight`}
                >
                  {subtitle}
                </p>
              )}
            </div>
            {action && (
              <div className="flex ml-auto h-[85%] items-center">
                <Button
                  label="Add"
                  leftIcon={<PlusIcon color={iconColor} />}
                  variant={buttonVariant}
                  size="small"
                  className="h-full"
                />
              </div>
            )}
          </div>
        </div>
      ) : variant === 'appointment' ? (
        <div className="flex w-full items-center p-2.5">
          <div className="flex flex-col justify-center w-full">
            {title && (
              <p className="text-h6 font-medium text-left w-auto">{title}</p>
            )}
            {description && (
              <p className="text-m1 text-left w-auto">{description}</p>
            )}
          </div>
          {icon && (
            <div
              className={`icon ${iconBackgroundColor} w-fit h-fit rounded-full flex items-center justify-center p-2`}
            >
              {icon}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`flex ${
            variant === 'pill'
              ? 'flex-row items-center justify-between'
              : 'flex-col'
          } w-full p-4`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              {title && (
                <p
                  className={`${
                    variant === 'pill'
                      ? 'text-h4'
                      : variant === 'appointment'
                        ? 'text-h6 font-medium'
                        : 'text-h3'
                  } text-${headerColor} text-left w-auto`}
                >
                  {title}
                </p>
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
          {subtitle && (
            <div className="pb-3">
              {variant !== 'pill' && subtitle && (
                <text className={`text-h6 text-left text-${headerColor}`}>
                  {subtitle}
                </text>
              )}
            </div>
          )}
          {variant !== 'pill' && description && (
            <div className={`text-left text-m1 mt-2 text-${descriptionColor}`}>
              {description}
            </div>
          )}
          {callToAction && (
            <div className="text-left text-m2 mt-3">{callToAction}</div>
          )}
          {action && (
            <div className={`${variant === 'pill' ? 'ml-0' : 'ml-auto mt-5'}`}>
              <Button
                label="Add"
                leftIcon={<PlusIcon color={iconColor} />}
                variant={buttonVariant}
                size={variant === 'pill' ? 'small' : 'medium'}
                className="h-full"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
