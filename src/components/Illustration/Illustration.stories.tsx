import Illustrations from './index';
import type { StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Illustrations',
  component: Illustrations,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    variant: 'book',
    size: 'medium',
    alt: 'Book icon',
  },
  argTypes: {
    variant: {
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
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'error', 'black', 'white'],
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Illustrations>;

export const Default: Story = {
  args: {
    variant: 'book',
    color: 'primary',
  },
};
