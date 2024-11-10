import { StoryObj } from '@storybook/react';
import { Activity } from './index.tsx';

const meta = {
  title: 'Components/Activity',
  component: Activity,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'failure'],
      control: { type: 'select' },
    },
    illustrationVariant: {
      options: [
        'book',
        'calendar',
        'cancel',
        'check',
        'clock',
        'color_star',
        'filter_filled',
        'filter_outlined',
        'left_arrow',
        'location',
        'mail',
        'pill',
        'plus_sign',
        'right_arrow',
        'star',
        'trash',
        'walk',
        'warn',
      ],
      control: { type: 'select' },
    },
  },
  args: {
    color: 'primary',
    illustrationVariant: 'walk',
    title: 'Challenge',
    time: '10',
    unit: 'min',
  },
};

export default meta;
type Story = StoryObj<typeof Activity>;

export const Default: Story = {
  args: {
    color: 'primary',
    illustrationVariant: 'walk',
    title: 'Challenge',
    time: '10',
    unit: 'min',
  },
};
