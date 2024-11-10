import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const textStyles = cva('', {
  variants: {
    variant: {
      body1Bold: 'text-sm font-bold',
      body1: 'text-sm font-light',
      body2Bold: 'text-xs font-bold',
      body2: 'text-xs font-light',
      body3Bold: 'text-[10px] font-bold',
      body3: 'text-[10px] font-light',
      body4Bold: 'text-[8px] font-bold',
      body4: 'text-[8px] font-light',
    },
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
  props?: React.HTMLProps<HTMLParagraphElement>;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  className = '',
  props,
}) => (
  <p {...props} className={`${textStyles({ variant })} ${className}`}>
    {children}
  </p>
);
