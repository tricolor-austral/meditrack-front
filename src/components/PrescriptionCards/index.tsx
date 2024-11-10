import {cva} from 'class-variance-authority';
import React from 'react';
import {Icon} from '../Icons';

const prescriptionCards = cva(
    'rounded-md border-2 bg-white shadow-sm flex justify-between align-middle px-2 py-2 text-sm', // Reduced padding and font size
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
    className?: string
}

export const PrescriptionCards: React.FC<PrescriptionCardsProps> = ({
                                                                        variant,
                                                                        children
                                                                    }) => (
    <div className={prescriptionCards({variant})}>
        {cardData(variant, children)}
    </div>
);

const cardData = (variant: string, children: React.ReactNode) => {
    const iconSize = "h-4 w-4"; // Small icon size

    if (variant === 'onDate') {
        return (
            <>
                {children}
                <Icon variant="check" color="secondary" className={iconSize}/>
            </>
        );
    }
    if (variant === 'overdue') {
        return (
            <>
                {children}
                <Icon variant="cancel" color="error" className={iconSize}/>
            </>
        );
    } else {
        return (
            <>
                {children}
                <Icon variant="warn" color="warn" className={iconSize}/>
            </>
        );
    }
};
