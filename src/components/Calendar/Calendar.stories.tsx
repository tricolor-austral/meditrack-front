import { Calendar } from './index.tsx';
import '../../index.css';
import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};
