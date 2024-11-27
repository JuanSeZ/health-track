import type { Meta, StoryObj } from '@storybook/react';
import Card from './index.tsx';
import PlusIcon from '../../assests/plus-icon.tsx';
import FireIcon from '../../assests/fire-icon.tsx';
import Button from '../button';

// Storybook Metadata
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'progressRing',
        'pill',
        'appointment',
        'streakMessage',
      ],
    },
    title: { control: 'text', description: 'Title of the card' },
    subtitle: { control: 'text', description: 'Subtitle of the card' },
    headerColor: {
      control: 'color',
      description: 'Color of the title and subtitle text',
    },
    description: {
      control: 'text',
      description: 'Description text of the card',
    },
    descriptionColor: {
      control: 'color',
      description: 'Color of the description text',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card',
    },
    iconColor: { control: 'color', description: 'Color of the icon' },
    iconBackgroundColor: {
      control: 'color',
      description: 'Background color of the icon container',
    },
    percentage: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Percentage for progress indicators',
    },
    progressColor: {
      control: 'color',
      description: 'Color of the progress indicator',
    },
    buttonVariant: {
      control: 'select',
      options: [
        'primary',
        'primaryOutlined',
        'primaryDark',
        'secondaryOutlined',
      ],
      description: 'Button variant for the action button',
    },
    icon: { control: 'boolean', description: 'Display an icon in the card' },
    action: {
      control: 'boolean',
      description: 'Display an action button in the card',
    },
  },
  args: {
    variant: 'default',
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'This is a sample card description.',
    buttonVariant: 'primary',
    icon: false,
    action: false,
    percentage: 50,
    backgroundColor: 'primary-300',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Utility Functions
const getIcon = (args: any) =>
  args.icon ? <PlusIcon color={args.iconColor || 'black'} /> : null;

const getAction = (args: any) =>
  args.action ? (
    <Button
      label="Add"
      leftIcon={<PlusIcon />}
      variant={args.buttonVariant || 'primary'}
      size="medium"
    />
  ) : null;

// Stories
export const Default: Story = {
  args: {
    variant: 'default',
    icon: true,
    action: true,
    backgroundColor: 'primary-300',
    classname: 'w-[350px]',
  },
  render: (args) => (
    <Card
      {...args}
      icon={getIcon(args)}
      action={getAction(args)}
      backgroundColor={`bg-${args.backgroundColor}`}
      classname={args.classname}
    />
  ),
};

export const ProgressRing: Story = {
  args: {
    variant: 'progressRing',
    percentage: 75,
    progressColor: '#057D9F',
    icon: true,
    classname: 'w-[350px]',
    action: true,
    headerColor: 'primary-600',
  },
  render: (args) => (
    <Card
      {...args}
      icon={getIcon(args)}
      action={getAction(args)}
      backgroundColor={`bg-${args.backgroundColor}`}
      classname={args.classname}
    />
  ),
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    title: 'Pill ',
    action: true,
    icon: true,
    classname: 'w-[350px]',
  },
  render: (args) => (
    <Card
      {...args}
      icon={getIcon(args)}
      action={getAction(args)}
      backgroundColor={`bg-${args.backgroundColor}`}
      classname={args.classname}
    />
  ),
};

export const Appointment: Story = {
  args: {
    variant: 'appointment',
    title: 'Doctor’s Appointment',
    description: 'Hospital Austral, 15:00',
    icon: false,
    classname: 'w-[350px]',
    backgroundColor: 'grey',
  },
  render: (args) => (
    <Card
      {...args}
      icon={getIcon(args)}
      backgroundColor={`bg-${args.backgroundColor}`}
      classname={args.classname}
    />
  ),
};

export const StreakMessage: Story = {
  args: {
    variant: 'streakMessage',
    description: 'You’ve stayed hydrated for 15 days!',
    icon: true,
    iconColor: '#057D9F',
    iconBackgroundColor: 'bg-primary-400',
    action: true,
    backgroundColor: 'primary-200',
    descriptionColor: 'primary-600',
  },
  render: (args) => (
    <Card
      {...args}
      icon={<FireIcon color={args.iconColor} />}
      action={getAction(args)}
      backgroundColor={`bg-${args.backgroundColor}`}
    />
  ),
};
