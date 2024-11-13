import NavbarItem from './navbar-item/index.tsx';
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
import { useEffect, useState } from 'react';

export enum NavBarItemType {
  Home = 'Home',
  Inventory = 'Inventory',
  Pills = 'Pills',
  Calendar = 'Calendar',
  Profile = 'Profile',
}

export interface NavBarProps {
  activeItem: NavBarItemType;
}

const Navbar = (props: NavBarProps) => {
  const [activeItem, setActiveItem] = useState<NavBarItemType>(
    props.activeItem
  );
  useEffect(() => {
    setActiveItem(props.activeItem);
  }, [props.activeItem]);
  const navbarItems = [
    {
      label: 'Home',
      icon:
        activeItem === NavBarItemType.Home ? (
          <HomeIconFill />
        ) : (
          <HomeIconOutline />
        ),
      variant: activeItem === NavBarItemType.Home ? 'active' : 'default',
      onclick: () => setActiveItem(NavBarItemType.Home),
    },
    {
      label: 'Inventory',
      icon:
        activeItem === NavBarItemType.Inventory ? (
          <InventoryIconFill />
        ) : (
          <InventoryIconOutline />
        ),
      variant: activeItem === NavBarItemType.Inventory ? 'active' : 'default',
      onclick: () => setActiveItem(NavBarItemType.Inventory),
    },
    {
      label: 'Pills',
      icon:
        activeItem === NavBarItemType.Pills ? (
          <PillsIconFill />
        ) : (
          <PillsIconOutline />
        ),
      variant: activeItem === NavBarItemType.Pills ? 'mainActive' : 'main',
      onclick: () => setActiveItem(NavBarItemType.Pills),
    },
    {
      label: 'Calendar',
      icon:
        activeItem === NavBarItemType.Calendar ? (
          <CalendarIconFill />
        ) : (
          <CalendarIconOutline />
        ),
      variant: activeItem === NavBarItemType.Calendar ? 'active' : 'default',
      onclick: () => setActiveItem(NavBarItemType.Calendar),
    },
    {
      label: 'Profile',
      icon:
        activeItem === NavBarItemType.Profile ? (
          <ProfileIconFill />
        ) : (
          <ProfileIconOutline />
        ),
      variant: activeItem === NavBarItemType.Profile ? 'active' : 'default',
      onclick: () => setActiveItem(NavBarItemType.Profile),
    },
  ];

  return (
    <div className="flex items-end justify-between bg-white w-[343px] h-[80px] gap-[17px] rounded-xl">
      {navbarItems.map((item) => (
        <NavbarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          variant={item.variant as 'active' | 'default' | 'main' | 'mainActive'}
          onClick={item.onclick}
        />
      ))}
    </div>
  );
};

export default Navbar;
