import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const titleStyles = cva('', {
  variants: {
    order: {
      h1: 'text-2xl font-bold',
      h2: 'text-xl font-bold',
      h3: 'text-lg font-medium',
      h4: 'text-md font-light',
    },
  },
});

interface TitleProps extends VariantProps<typeof titleStyles> {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children, order }) => (
  <p className={titleStyles({ order })}>{children}</p>
);
