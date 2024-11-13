import { HTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import ChevronIcon from '../../assests/right-chevron.svg';

const listItemVariant = cva(['flex', 'justify-between'], {
  variants: {
    hasIcon: { true: 'flex', false: 'flex' },
    hasDescription: { true: 'flex-col items-start', false: 'items-start' },
  },
  defaultVariants: {
    hasIcon: false,
    hasDescription: false,
  },
});

export interface ListItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listItemVariant> {
  icon?: ReactNode;
  title: string;
  description?: string;
  itemName?: string;
}

const ListItem = ({
  icon,
  title,
  description,
  itemName,
  ...rest
}: ListItemProps) => {
  return (
    <div
      className={`${listItemVariant({
        hasIcon: !!icon,
        hasDescription: !!description,
      })} w-[342px] h-[55px]`}
      {...rest}
    >
      <div className="flex w-full">
        {icon && <div className="items-center mr-2">{icon}</div>}
        <div
          className={`flex flex-grow flex-col ${!description ? 'justify-center' : ''}`}
        >
          <span className="text-body flex justify-start">{title}</span>
          {description && <span className="text-m1 flex">{description}</span>}
        </div>

        <div className="flex items-center gap-2">
          {itemName && <span className="text-body text-grey">{itemName}</span>}
          <div className="flex justify-end">
            <ChevronIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
