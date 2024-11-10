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
      options: [
        'default',
        'withIcon',
        'redStroke',
        'time',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    // Ideally we would want to add list of Icons here, I couldn't find a way to do that
    rightIcon: {
      control: 'boolean',
      description: 'Display Plus icon on the left',
    },
    style: {
      control: 'color',
      description: 'Background color of the button',
    },
  },
  args: {
    label: 'Name',
    variant: 'default',
    placeholder: 'Enter text',
    rightIcon: false,
    duration: '1 hour',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Input {...args}/>
  ),
};

export const WithIcon: Story = {
  args: {
    variant: 'withIcon',
    label: 'Name',
    placeholder: 'Enter text',
    rightIcon: true,
  },
  render: (args) => (
    <Input {...args}  />
  ),
};

export const RedStroke: Story = {
  args: {
    variant: 'redStroke',
    label: 'Name',
    placeholder: 'Enter text',
  },
  render: (args) => (
    <Input {...args}  />
  ),
};
//Time variant missing
