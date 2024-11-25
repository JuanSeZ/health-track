import { Meta, StoryObj } from '@storybook/react';
import { HorizontalMoveButton } from './index.tsx';

const meta: Meta<typeof HorizontalMoveButton> = {
  title: 'Components/HorizontalMoveButton',
  component: HorizontalMoveButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const LeftButton: Story = {
  args: {
    variant: 'left',
    color: '#39AECF',
  },
  render: (args) => (
    <HorizontalMoveButton variant={args.variant} color={args.color} />
  ),
};

export const RightButton: Story = {
  args: {
    variant: 'right',
    color: '#39AECF',
  },
  render: (args) => (
    <HorizontalMoveButton variant={args.variant} color={'primary-600'} />
  ),
};
