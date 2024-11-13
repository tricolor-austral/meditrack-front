import {cva} from 'class-variance-authority';
import React from 'react';
import {Icon} from '../Icons';
import {Text} from "../Text";
import {Title} from "../Title";

const prescriptionCards = cva(
    'rounded-md border-2 bg-white shadow-sm flex justify-between items-center px-4 py-2 text-sm', // Reduced padding and font size
    {
        variants: {
            variant: {
                onDate: 'border-secondary text-primary',
                overdue: 'border-red text-primary',
                upcoming: 'border-yellow text-primary',
            },
        },
    }
);

interface PrescriptionCardsProps {
    variant: 'onDate' | 'overdue' | 'upcoming',
    children: React.ReactNode,
    medication: string,
    date: string,
}

export const PrescriptionCards: React.FC<PrescriptionCardsProps> = ({
                                                                        variant,
                                                                        medication,
                                                                        date,
                                                                    }) => (
    <div className={prescriptionCards({variant})}>
        <Title color={'#61A5C2'} order="h3">{date}</Title>
        <Title color={'#61A5C2'} order="h3">{medication}</Title>
        {cardData(variant)}
    </div>
);

const cardData = (variant: string) => {
    const iconSize = "h-4 w-4"; // Small icon size

    if (variant === 'onDate') {
        return (
            <Icon variant="check" color="text-secondary" className={iconSize}/>
        );
    }
    if (variant === 'overdue') {
        return (
            <Icon variant="cancel" color="text-red" className={iconSize}/>
        );
    } else {
        return (
            <Icon variant="warn" color="text-yellow" className={iconSize}/>
        );
    }
};
