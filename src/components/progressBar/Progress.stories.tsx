import type { Meta, StoryObj } from '@storybook/react';
import Progress from './index.tsx';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['progressRing', 'progressBar'],
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card',
    },
    percentage: {
      control:  { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Percentage for progress indicators',

    },
    progressColor: {
      control: 'color',
      description: 'Color of the progress indicator',
    },
  },
  args: {
    variant: 'progressRing',
    percentage: 50,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressRing: Story = {
  args: {
    variant: 'progressRing',
    percentage: 75,
    progressColor: '#39AECF',
    backgroundColor: 'primary-300',
  },
  render: (args) => (
    <Progress
      {...args}
      backgroundColor={`bg-${args.backgroundColor}`}
    />
  ),
};

export const ProgressBar: Story = {
  args: {
    variant: 'progressBar',
    percentage: 60,
    progressColor: '#39AECF',
    backgroundColor: 'primary-300',
  },
  render: (args) => (
    <Progress
      {...args}
      backgroundColor={`bg-${args.backgroundColor}`}
    />
  ),
};
