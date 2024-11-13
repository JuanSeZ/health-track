import type { Meta, StoryObj } from '@storybook/react';
import Card from './index.tsx';
import PlusIcon from '../../assests/plus-icon.tsx';
import Button from '../button';

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
      options: ['default', 'progressRing', 'progressBar', 'pill'],
    },
    title: {
      control: 'text',
      description: 'Title of the card',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the card',
    },
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
    iconColor: {
      control: 'color',
      description: 'Color of the icon',
    },
    iconBackgroundColor: {
      control: 'color',
      description: 'Background color of the icon container',
    },
    percentage: {
      control: 'number',
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
    icon: {
      control: 'boolean',
      description: 'Display an icon in the card',
    },
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Card
      {...args}
      icon={args.icon ? <PlusIcon /> : undefined}
      action={
        args.action ? (
          <Button
            label="Add"
            leftIcon={<PlusIcon />}
            variant={args.buttonVariant}
            size="medium"
          />
        ) : undefined
      }
    />
  ),
};

export const ProgressRing: Story = {
  args: {
    variant: 'progressRing',
    percentage: 75,
    headerColor: 'black',
    progressColor: '#003bff',
  },
  render: (args) => <Card {...args} icon={<PlusIcon color="black" />} />,
};

export const ProgressBar: Story = {
  args: {
    variant: 'progressBar',
    percentage: 60,
    progressColor: '#003bff',
  },
  render: (args) => (
    <Card
      {...args}
      action={
        args.action ? (
          <Button
            label="Add"
            leftIcon={<PlusIcon />}
            variant={args.buttonVariant}
            size="medium"
          />
        ) : undefined
      }
    />
  ),
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    title: 'Pill',
    action: 'Add',
  },
};
