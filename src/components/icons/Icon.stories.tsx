import Icon from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    variant: 'calendar',
    size: 'medium',
    alt: 'Calendar icon',
  },
  argTypes: {
    variant: {
      options: [
        'calendar',
        'close',
        'home',
        'logout',
        'prescriptions',
        'property_selected',
        'star',
        'user',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    alt: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Define individual stories
export const Default: Story = {
  args: {
    variant: 'calendar',
    size: 'medium',
    alt: 'Calendar icon',
  },
};

export const Small: Story = {
  args: {
    variant: 'close',
    size: 'small',
    alt: 'Close icon',
  },
};

export const Large: Story = {
  args: {
    variant: 'home',
    size: 'large',
    alt: 'Home icon',
  },
};
