import type { StoryObj } from '@storybook/react';
import { Input } from './index.tsx';
import '../../index.css';

const meta = {
  title: 'Components/Input',
  component: Input,
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
    required: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      options: ['text', 'password', 'email', 'number'],
      control: { type: 'select' },
    },
    showIcon: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Story definitions
export const Default: Story = {
  args: {
    placeholder: 'Default Input',
  },
};

export const Primary: Story = {
  args: {
    placeholder: 'Primary Input',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Secondary Input',
    variant: 'secondary',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error Input',
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Input',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Required Input',
    required: true,
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Password Input',
    type: 'password',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Email Input',
    type: 'email',
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Number Input',
    type: 'number',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small Input',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large Input',
    size: 'lg',
  },
};
