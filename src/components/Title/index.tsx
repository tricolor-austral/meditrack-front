import {cva, VariantProps} from 'class-variance-authority';
import React from 'react';

const titleStyles = cva('', {
    variants: {
        order: {
            h1: 'text-3xl font-light',
            h2: 'text-2xl font-light',
            h3: 'text-xl font-light',
            h4: 'text-lg font-light',
            h1Bold: 'text-3xl font-bold',
            h2Bold: 'text-2xl font-bold',
            h3Bold: 'text-xl font-bold',
            h4Bold: 'text-lg font-bold',
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
