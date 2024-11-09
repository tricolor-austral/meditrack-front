import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import ChevronDownIcon from '../../assets/chevron-down.svg';
import ChevronUpIcon from '../../assets/chevron-up.svg';

interface SelectorProps extends VariantProps<typeof selectorStyles> {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'error';
  size?: 'sm' | 'md' | 'lg';
  isExpanded?: boolean;
}

const selectorStyles = cva(
  'rounded transition-all block w-full h-auto px-4 border border-gray-400 focus:border-transparent appearance-none',
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
    } as never,
  }
);

export const Selector: React.FC<SelectorProps> = ({
  options,
  selected,
  onChange,
  disabled,
  variant,
  size,
  isExpanded,
}) => (
  <div className="relative w-full">
    <select
      className={selectorStyles({ variant, size })}
      disabled={disabled}
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option
          className="bg-white text-gray-700 hover:bg-gray-100"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img
        src={isExpanded ? ChevronUpIcon : ChevronDownIcon}
        alt="Dropdown icon"
        className="h-4 w-4"
      />
    </span>
  </div>
);
