import {cva} from 'class-variance-authority';
import React from 'react';

const DateCardsStyles = cva(
    'border-2 flex flex-col justify-center items-center rounded-md w-[83px] h-[69px]',
    {
        variants: {
            variant: {
                filled: 'text-white bg-primary',
                outlined: 'text-primary border-primary bg-white',
            },
        },
    }
);

interface DateCardsProps {
    variant: 'filled' | 'outlined',
    children: React.ReactNode,
    onClick?: () => void,
    className?: string
}

export const DateCards: React.FC<DateCardsProps> = ({variant, children, onClick}) => (
    <div className={DateCardsStyles({variant})} onClick={onClick}>
        {children}
    </div>
);
