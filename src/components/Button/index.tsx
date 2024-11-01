import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonStyles = cva('rounded transition-all block h-auto ', {
  variants: {
    size: {
      sm: 'text-sm px-2 py-0.5 max-h-8',
      md: 'text-md px-4 py-1 max-h-10',
      lg: 'text-lg px-6 py-2 max-h-14',
    },
    colorType: {
      primary: '',
      secondary: '',
      error: '',
    },
    variant: {
      solid: '',
      outline: '',
      ghost: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  compoundVariants: [
    {
      colorType: 'primary',
      variant: 'solid',
      className: 'bg-primary text-white',
    },
    {
      colorType: 'secondary',
      variant: 'solid',
      className: 'bg-secondary text-white',
    },
    { colorType: 'error', variant: 'solid', className: 'bg-red text-white' },

    {
      colorType: 'primary',
      variant: 'outline',
      className: 'border border-primary text-primary',
    },
    {
      colorType: 'secondary',
      variant: 'outline',
      className: 'border border-secondary text-secondary',
    },
    {
      colorType: 'error',
      variant: 'outline',
      className: 'border border-red text-red',
    },

    { colorType: 'primary', variant: 'ghost', className: 'text-primary' },
    { colorType: 'secondary', variant: 'ghost', className: 'text-secondary' },
    { colorType: 'error', variant: 'ghost', className: 'text-red' },
  ] as never,
  defaultVariants: {
    colorType: 'primary',
    size: 'md',
    variant: 'solid',
    disabled: false,
  } as never,
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  colorType,
  size,
  variant,
  children,
  disabled,
}) => (
  <button
    className={buttonStyles({ colorType, size, variant, disabled })}
    disabled={disabled}
  >
    {children}
  </button>
);
