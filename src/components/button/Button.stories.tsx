import type { Meta, StoryObj } from '@storybook/react';
import Button from './index.tsx';
import PlusIcon from '../../assests/plus-icon.tsx';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'primaryOutlined',
        'primaryDark',
        'secondaryOutlined',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    // Ideally we would want to add list of Icons here, I couldn't find a way to do that
    leftIcon: {
      control: 'boolean',
      description: 'Display Plus icon on the left',
    },
    style: {
      control: 'color',
      description: 'Background color of the button',
    },
  },
  args: {
    onClick: fn,
    label: 'Button',
    variant: 'primary',
    size: 'medium',
    leftIcon: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    leftIcon: false,
  },
  render: (args) => (
    <Button {...args} leftIcon={args.leftIcon ? <PlusIcon /> : undefined} />
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondaryOutlined',
    leftIcon: false,
  },
  render: (args) => (
    <Button {...args} leftIcon={args.leftIcon ? <PlusIcon /> : undefined} />
  ),
};

export const Large: Story = {
  args: {
    size: 'large',
    leftIcon: false,
  },
  render: (args) => (
    <Button {...args} leftIcon={args.leftIcon ? <PlusIcon /> : undefined} />
  ),
};

export const Small: Story = {
  args: {
    size: 'small',
    leftIcon: false,
  },
  render: (args) => (
    <Button {...args} leftIcon={args.leftIcon ? <PlusIcon /> : undefined} />
  ),
};
