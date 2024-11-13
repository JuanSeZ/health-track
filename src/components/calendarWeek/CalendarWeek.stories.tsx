import { Meta, StoryObj } from '@storybook/react';
import { CalendarWeek } from './index';
const dayNumber = [20, 21, 22, 23, 24];
const meta: Meta<typeof CalendarWeek> = {
  title: 'Components/CalendarWeek',
  component: CalendarWeek,
  tags: ['autodocs'],
  argTypes: {
    pickedDate: {
      control: { type: 'select' },
      options: dayNumber,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const dayss = [
  { day: 'M', number: 20 },
  { day: 'T', number: 21 },
  { day: 'W', number: 22 },
  { day: 'T', number: 23 },
  { day: 'F', number: 24 },
];

export const Selected: Story = {
  args: {
    days: dayss,
    pickedDate: 22,
  },
  render: (args) => <CalendarWeek days={dayss} pickedDate={args.pickedDate} />,
};
