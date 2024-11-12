import type { StoryObj } from '@storybook/react';
import { Text } from './index.tsx';
import '../../index.css';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    variant: {
      options: [
        'body1',
        'body1Bold',
        'body2',
        'body2Bold',
        'body3',
        'body3Bold',
        'body4',
        'body4Bold',
      ],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text',
  },
};

export const Bold: Story = {
  args: {
    children: 'Bold Text',
    variant: 'body1Bold',
  },
};

export const Body2: Story = {
  args: {
    children: 'Body2 Text',
    variant: 'body2',
  },
};

export const Body2Bold: Story = {
  args: {
    children: 'Body2 Bold Text',
    variant: 'body2Bold',
  },
};

export const Body3: Story = {
  args: {
    children: 'Body3 Text',
    variant: 'body3',
  },
};
