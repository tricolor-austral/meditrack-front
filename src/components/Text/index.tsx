import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const textStyles = cva('', {
    variants: {
        variant: {
            body1Bold: 'text-sm font-bold font-montserrat',
            body1: 'text-sm font-light font-montserrat',
            body2Bold: 'text-xs font-bold font-montserrat' ,
            body2: 'text-xs font-light font-montserrat',
            body3Bold: 'text-[10px] font-bold font-montserrat',
            body3: 'text-[10px] font-light font-montserrat',
            body4Bold: 'text-[8px] font-bold font-montserrat',
            body4: 'text-[8px] font-light font-montserrat',
        },
    },
});

interface TextProps extends VariantProps<typeof textStyles> {
    children: React.ReactNode;
    className?: string;
    color?: string;
}

export const Text: React.FC<TextProps> = ({ children, variant, className = '', color = 'black' }) => (
    <p style={{color: color}} className={`${textStyles({ variant })} ${className}`}>
        {children}
    </p>
);
