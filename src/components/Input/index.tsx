import { cva, VariantProps } from 'class-variance-authority';

interface InputProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
  variant?: 'primary' | 'secondary' | 'error';
}

const inputStyles = cva('rounded transition-all block w-full h-auto px-4 border border-gray-400', {
  variants: {
    size: {
      sm: 'text-sm py-1 max-h-8',
      md: 'text-md py-2 max-h-10',
      lg: 'text-lg py-4 max-h-14',
    },
      variant: {
          primary: 'focus:border-primary',
          secondary: 'focus:border-secondary',
          error: 'focus:border-red',
      },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'secondary',
  } as never,
});

export const Input: React.FC<InputProps> = ({
  type,
  size,
  variant,
  placeholder,
  disabled,
  required,
}) => (
  <input
    type={type}
    className={inputStyles({ size, variant, disabled })}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
  />
);
