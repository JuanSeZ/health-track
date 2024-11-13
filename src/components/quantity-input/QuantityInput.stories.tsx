import type { Meta, StoryObj } from '@storybook/react';
import QuantityInput from './index.tsx';

const meta = {
  title: 'Components/QuantityInput',
  component: QuantityInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialQuantity: {
      control: 'number',
      description: 'Sets the initial quantity value',
    },
    disableLess: {
      control: 'boolean',
      description: 'Disables the decrement button when true',
    },
  },
  args: {
    initialQuantity: 0,
    disableLess: false,
  },
} satisfies Meta<typeof QuantityInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialQuantity: 0,
    disableLess: false,
  },
  render: (args) => <QuantityInput {...args} />,
};

export const WithInitialQuantity: Story = {
  args: {
    initialQuantity: 5,
    disableLess: false,
  },
  render: (args) => <QuantityInput {...args} />,
};

export const DisableLessButton: Story = {
  args: {
    initialQuantity: 3,
    disableLess: true,
  },
  render: (args) => <QuantityInput {...args} />,
};
