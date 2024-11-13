import {cva, VariantProps} from 'class-variance-authority';
import React from 'react';

const titleStyles = cva('', {
    variants: {
        order: {
            h1: 'text-3xl font-light',
            h2: 'text-2xl font-light',
            h3: 'text-xl font-light',
            h4: 'text-lg font-light',
        },
    },
});

interface TitleProps extends VariantProps<typeof titleStyles> {
    children: React.ReactNode,
    className?: string,
    color?: string,
}

export const Title: React.FC<TitleProps> = ({children, order, color = 'black' }) => (
    <p style={{color: color}} className={titleStyles({order})}>{children}</p>
);
