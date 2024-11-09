import type { StoryObj } from '@storybook/react';
import { Selector } from './index.tsx';
import '../../index.css';

const meta = {
  title: 'Components/Selector',
  component: Selector,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'error'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onChange: {
      action: 'onChange',
    },
    options: {
      control: { type: 'object' },
    },
    selected: {
      control: { type: 'text' },
    },
    isExpanded: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Selector>;

// Story definitions
export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    selected: '1',
  },
};
