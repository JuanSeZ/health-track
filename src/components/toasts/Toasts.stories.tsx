import { Meta, StoryObj } from '@storybook/react';
import { Toasts } from './index';

const meta = {
  title: 'Components/Toasts',
  component: Toasts,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['success', 'error'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Toasts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => <Toasts variant={args.variant} />,
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => <Toasts variant={args.variant} />,
};
