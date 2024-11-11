import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './index.tsx';
import { fn } from '@storybook/test';

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
      options: ['Home', 'Inventory', 'Pills', 'Calendar', 'Profile'],
      description: 'Sets the active item in the navbar',
    },
  },
  args: {
    onClick: fn,
    activeItem: 'Home',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItem: 'Home',
  },
  render: (args) => <Navbar {...args} />,
};
