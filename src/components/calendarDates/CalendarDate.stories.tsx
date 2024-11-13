import { Meta, StoryObj } from '@storybook/react';
import { CalendarDate } from './index';

const meta = {
  title: 'Components/CalendarDateButton',
  component: CalendarDate,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'unselected',
        'selected',
      ],
      control: { type: 'select' },
    },
    number: {
      control: { type: 'text' },
    },
    dayName: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CalendarDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    number: '1',
    dayName: 'M',
    variant: 'selected',
  },
  render: (args) => (
    <CalendarDate variant={args.variant} number={args.number} dayName={args.dayName} />
  ),
};

export const Unselected: Story = {
  args: {
    number: '1',
    dayName: 'M',
    variant: 'selected',
  },
  render: (args) => (
    <CalendarDate variant={args.variant} number={args.number} dayName={args.dayName} />
  ),
};
