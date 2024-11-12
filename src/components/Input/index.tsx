import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import DeleteIcon from '../../assets/delete.svg';

interface InputProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
  variant?: 'primary' | 'secondary' | 'error';
  showIcon?: boolean;
}

const inputStyles = cva(
  'rounded transition-all block w-full h-auto px-4 border rounded-[10px] bg-gray-200 focus:border-transparent',
  {
    variants: {
      size: {
        sm: 'text-sm py-1 max-h-8',
        md: 'text-md py-2 max-h-10',
        lg: 'text-lg py-4 max-h-14',
      },
      variant: {
        primary: 'focus:outline-primary',
        secondary: 'focus:outline-secondary',
        error: 'focus:outline-red focus:border-red-500',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'secondary',
      disabled: false,
      required: false,
      type: 'text',
      showIcon: true,
    } as never,
  }
);

export const Input: React.FC<InputProps> = ({
  type,
  size,
  variant,
  placeholder,
  disabled,
  required,
  showIcon,
}) => (
  <div className="relative w-full">
    <input
      type={type}
      className={`${inputStyles({ size, disabled, variant })}`}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
    {showIcon && (
      <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
        <img src={DeleteIcon} alt="Clear" className="h-4 w-4" />
      </span>
    )}
  </div>
);
