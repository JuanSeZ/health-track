import type { Meta, StoryObj } from '@storybook/react';
import Input from './index.tsx';

const meta = {
  title: 'Components/Inputs',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'withIcon', 'redStroke'],
    },
    // Ideally we would want to add list of Icons here, I couldn't find a way to do that
    rightIcon: {
      control: 'boolean',
      description: 'Display Cross icon on the right',
    },
  },
  args: {
    label: 'Name',
    variant: 'default',
    placeholder: 'Enter text',
    rightIcon: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => <Input {...args} />,
};

export const WithIcon: Story = {
  args: {
    variant: 'withIcon',
    label: 'Name',
    placeholder: 'Enter text',
    rightIcon: true,
  },
  render: (args) => <Input {...args} />,
};

export const RedStroke: Story = {
  args: {
    variant: 'redStroke',
    label: 'Name',
    placeholder: 'Enter text',
  },
  render: (args) => <Input {...args} />,
};
