import { cva } from 'class-variance-authority';
import React from 'react';
import { Text } from '../Text';

const DateCardsStyles = cva(
    'border-2 flex flex-col items-center justify-evenly items-center rounded-md w-[83px] h-[69px] cursor-pointer',  // Added cursor-pointer here
    {
        variants: {
            variant: {
                filled: 'text-primary bg-primary border-primary',
                outlined: 'text-white border-primary bg-white',
            },
        },
    }
);

interface DateCardsProps {
    variant: 'filled' | 'outlined';
    onClick?: () => void;
    className?: string;
    day: string;
    date: string;
}

export const DateCards: React.FC<DateCardsProps> = ({ variant, date, day, onClick }) => (
    <div className={DateCardsStyles({ variant })} onClick={onClick}>
        <Text variant={'body2'} color={variant !== 'filled' ? '#61A5C2' : 'white'}>{day}</Text>
        <Text variant={'body2'} color={variant !== 'filled' ? '#61A5C2' : 'white'}>{date}</Text>
    </div>
);
