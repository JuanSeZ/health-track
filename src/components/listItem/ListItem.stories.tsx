import type { Meta, StoryObj } from '@storybook/react';
import ListItem from './index.tsx';
import AvatarIcon from '/src/assests/dependant-icon.svg';

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    icon: {
      control: 'boolean',
      description: 'Display avatar icon on the left',
    },
    description: {
      control: 'text',
      description: 'Optional description displayed below the title',
    },
    itemName: {
      control: 'text',
      description: 'Text displayed next to the chevron on the right',
    },
    title: {
      control: 'text',
      description: 'Title of the list item',
    },
  },
  args: {
    title: 'Your dependents',
    itemName: 'Sofía',
    description: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: false,
    description: '',
    itemName: '',
    title: 'Your dependents'
  },
};

export const WithIcon: Story = {
  args: {
    icon: true,
    description: '',
    itemName: '',
    title: 'Juan'
  },
  render: (args) => (
    <ListItem
      {...args}
      icon={<AvatarIcon />}
    />
  ),
};

export const WithDescription: Story = {
  args: {
    icon: false,
    description: 'Manage your account',
    itemName: '',
    title: 'Settings'
  },
  render: (args) => (
    <ListItem
      {...args}
    />
  ),
};

export const WithItemName: Story = {
  args: {
    icon: false,
    description: '',
    itemName: 'Sofía',
    title: 'Name'
  },
  render: (args) => (
    <ListItem
      {...args}
    />
  ),
};