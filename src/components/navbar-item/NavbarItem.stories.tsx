import type { Meta, StoryObj } from '@storybook/react';
import NavbarItem from './index.tsx';
import { NavBarItemType } from './index.tsx';

const meta = {
  title: 'Components/NavbarItem',
  component: NavbarItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'select',
      description: 'Sets the active item in the navbar',
      options: NavBarItemType,
    },
    variant: {
      control: 'select',
      options: [
        'selected',
        'unselected'
      ],
    }
  },
} satisfies Meta<typeof NavbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeSelected: Story = {
  args: {
    item: NavBarItemType.Home,
    label: 'Home',
    variant: 'selected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const HomeUnselected: Story = {
  args: {
    item: NavBarItemType.Home,
    label: 'Home',
    variant: 'unselected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const ProfileSelected: Story = {
  args: {
    item: NavBarItemType.Profile,
    label: 'Profile',
    variant: 'selected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const ProfileUnselected: Story = {
  args: {
    item: NavBarItemType.Profile,
    label: 'Profile',
    variant: 'unselected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const PillsSelected: Story = {
  args: {
    item: NavBarItemType.Pills,
    label: 'Pills',
    variant: 'selected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const PillsUnselected: Story = {
  args: {
    item: NavBarItemType.Pills,
    label: 'Pills',
    variant: 'unselected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const InventorySelected: Story = {
  args: {
    item: NavBarItemType.Inventory,
    label: 'Inventory',
    variant: 'selected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const InventoryUnselected: Story = {
  args: {
    item: NavBarItemType.Inventory,
    label: 'Inventory',
    variant: 'unselected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const CalendarSelected: Story = {
  args: {
    item: NavBarItemType.Calendar,
    label: 'Calendar',
    variant: 'selected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};

export const CalendarUnselected: Story = {
  args: {
    item: NavBarItemType.Calendar,
    label: 'Calendar',
    variant: 'unselected',
  },
  render: (args) => <NavbarItem
    key={args.label}
    item={args.item}
    label={args.label}
    icon={args.icon}
    variant={args.variant}
  />,
};
