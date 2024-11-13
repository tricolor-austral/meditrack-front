import type { StoryObj } from '@storybook/react';
import { Button } from './index.tsx';
import '../../index.css';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    colorType: 'primary',
    size: 'md',
    variant: 'solid',
    disabled: false,
  },
  argTypes: {
    colorType: {
      options: ['primary', 'secondary', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const SolidPrimary: Story = {
  args: {
    children: 'Primary Solid Button',
    colorType: 'primary',
    variant: 'solid',
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: 'Secondary Outline Button',
    colorType: 'secondary',
    variant: 'outline',
  },
};

export const GhostError: Story = {
  args: {
    children: 'Error Ghost Button',
    colorType: 'error',
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
