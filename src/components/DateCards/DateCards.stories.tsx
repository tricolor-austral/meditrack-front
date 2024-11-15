import { DateCards } from './index.tsx';
import { StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/DateCards',
  component: DateCards,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'select' },
    },
    day: {
      control: { type: 'text' },
    },
    date: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'filled',
    day: 'Mon',
    date: '16/09',
  },
};

export default meta;
type Story = StoryObj<typeof DateCards>;

export const Default: Story = {
  args: {
    variant: 'filled',
  },
};
