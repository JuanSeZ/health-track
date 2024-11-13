import SearchBar from './index.tsx';
import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '../navbar';
import { NavBarItemType } from '../navbar/Navbar.stories.tsx';
import { render } from 'react-dom';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SearchBar />,
};
