import React, { ReactNode, MouseEventHandler } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import HomeIconOutline from '../../assests/home-icone-outline.svg';
import HomeIconFill from '../../assests/home-icon-fill.svg';
import InventoryIconOutline from '../../assests/inventory-icon-outline.svg';
import InventoryIconFill from '../../assests/inventory-icon-fill.svg';
import CalendarIconOutline from '../../assests/calendar-icon-outline.svg';
import CalendarIconFill from '../../assests/calendar-icon-fill.svg';
import ProfileIconOutline from '../../assests/profile-icon-outline.svg';
import ProfileIconFill from '../../assests/profile-icon-fill.svg';
import PillsIconOutline from '../../assests/pill-icon-outline.svg';
import PillsIconFill from '../../assests/pill-icon-fill.svg';



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
    'font-sans'
  ],
  {
    variants: {
      variant: {
        unselected: 'font-medium',
        selected: 'font-semibold',
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  }
);

export enum NavBarItemType {
  Home = 'Home',
  Inventory = 'Inventory',
  Pills = 'Pills',
  Calendar = 'Calendar',
  Profile = 'Profile',
}

export interface NavbarItemProps
  extends VariantProps<typeof navbarItemVariant> {
  label: string;
  item: NavBarItemType;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function getIcon(activeItem: NavBarItemType, variant: string) {
  if (variant === "unselected") {
    switch (activeItem) {
      case NavBarItemType.Home:
        return <HomeIconOutline />;
      case NavBarItemType.Inventory:
        return <InventoryIconOutline />;
      case NavBarItemType.Pills:
        return <PillsIconOutline/> ;
      case NavBarItemType.Calendar:
        return <CalendarIconOutline />;
      case NavBarItemType.Profile:
        return <ProfileIconOutline />;
    }
  }
  else {
    switch (activeItem) {
      case NavBarItemType.Home:
        return <HomeIconFill />;
      case NavBarItemType.Inventory:
        return <InventoryIconFill />;
      case NavBarItemType.Pills:
        return <PillsIconFill />;
      case NavBarItemType.Calendar:
        return <CalendarIconFill />;
      case NavBarItemType.Profile:
        return <ProfileIconFill />;
    }
  }
}

const NavbarItem = ({ variant, label, item, icon = getIcon(item, variant), onClick }: NavbarItemProps) => {
  return (
    <div className={navbarItemVariant({ variant })} onClick={onClick}>
      {icon}
      {label}
    </div>
  );
};

export default NavbarItem;
