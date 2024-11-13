import type { StoryObj } from '@storybook/react';
import { Title } from './index.tsx';
import '../../index.css';

const meta = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    order: 'h1',
    color: 'black',
  },
  argTypes: {
    order: {
      options: ['h1', 'h2', 'h3', 'h4'],
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Default Title',
  },
};

export const H2: Story = {
  args: {
    children: 'H2 Title',
    order: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'H3 Title',
    order: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'H4 Title',
    order: 'h4',
  },
};
