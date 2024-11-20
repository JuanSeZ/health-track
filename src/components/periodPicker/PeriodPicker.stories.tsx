import type { Meta, StoryObj } from '@storybook/react';
import { PeriodPicker, Periods } from './index.tsx';

const meta: Meta<typeof PeriodPicker> = {
  title: 'Components/PeriodPicker',
  component: PeriodPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedPeriod: {
      control: 'select',
      options: Object.values(Periods),
      description: 'The currently selected period.',
    },
    selectedPeriodColorBg: {
      control: 'color',
      description: 'Background color for the selected period.',
    },
    unSelectedPeriodColorBg: {
      control: 'color',
      description: 'Background color for unselected periods.',
    },
    selectedPeriodColorText: {
      control: 'color',
      description: 'Text color for the selected period.',
    },
    unSelectedPeriodColorText: {
      control: 'color',
      description: 'Text color for unselected periods.',
    },
  },
  args: {
    selectedPeriod: Periods.DAY,
    selectedPeriodColorBg: 'primary-500',
    unSelectedPeriodColorBg: 'primary-200',
    selectedPeriodColorText: 'white',
    unSelectedPeriodColorText: 'primary-500',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DaySelected: Story = {
  args: {
    selectedPeriod: Periods.DAY,
  },
};

export const WeekSelected: Story = {
  args: {
    selectedPeriod: Periods.WEEK,
  },
};

export const MonthSelected: Story = {
  args: {
    selectedPeriod: Periods.MONTH,
  },
};

export const SixMonthsSelected: Story = {
  args: {
    selectedPeriod: Periods.SIX_MONTHS,
  },
};

export const YearSelected: Story = {
  args: {
    selectedPeriod: Periods.YEAR,
  },
};
