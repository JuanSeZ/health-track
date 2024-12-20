import type { Meta, StoryObj } from '@storybook/react';
import Navbar, { NavBarItemType } from './index.tsx';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeItem: {
      control: 'select',
      options: NavBarItemType,
      description: 'Sets the active item in the navbar',
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItem: NavBarItemType.Home,
  },
  render: (args) => <Navbar activeItem={args.activeItem} />,
};
