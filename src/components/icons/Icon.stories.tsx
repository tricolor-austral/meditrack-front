import type { StoryObj } from '@storybook/react';
import { Icon } from './index.tsx';
import '../../index.css';

const meta = {
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
            options: ['calendar', 'close', 'home', 'logout', 'prescriptions', 'property_selected', 'star', 'user'],
            control: { type: 'select' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        variant: 'calendar',
        size: 'medium',
        alt: 'Calendar icon',
    },
};

export const Close: Story = {
    args: {
        variant: 'close',
        size: 'small',
        alt: 'Close icon',
    },
};

export const Home: Story = {
    args: {
        variant: 'home',
        size: 'large',
        alt: 'Home icon',
    },
};


