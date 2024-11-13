import { ReactNode, MouseEventHandler } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const navbarItemVariant = cva(
  [
    'flex',
    'flex-col',
    'items-center',
    'w-[52px]',
    'cursor-pointer',
    'text-primary-600',
    'text-label',
    'justify-end',
  ],
  {
    variants: {
      variant: {
        default: 'h-[52px]',
        active: 'h-[52px] font-semibold',
        main: 'h-[80px]',
        mainActive: 'h-[80px] font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface NavbarItemProps
  extends VariantProps<typeof navbarItemVariant> {
  label: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const NavbarItem = ({ variant, label, icon, onClick }: NavbarItemProps) => {
  return (
    <div className={navbarItemVariant({ variant })} onClick={onClick}>
      {icon}
      {label}
    </div>
  );
};

export default NavbarItem;
