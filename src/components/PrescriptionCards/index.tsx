import { cva } from 'class-variance-authority';
import Illustrations from '../Illustration';
import React from 'react';

const prescriptionCards = cva(
  'rounded-b-md border-2 rounded-tr-md bg-white shadow-md flex justify-between align-middle px-[18px] py-[20px] text-primary',
  {
    variants: {
      variant: {
        onDate: 'border-secondary',
        overdue: 'border-red',
        upcoming: 'border-yellow',
      },
    },
  }
);

interface PrescriptionCardsProps {
  variant: 'onDate' | 'overdue' | 'upcoming';
  children: React.ReactNode;
}

export const PrescriptionCards: React.FC<PrescriptionCardsProps> = ({
  variant,
  children,
}) => (
  <div className={prescriptionCards({ variant })}>
    {cardData(variant, children)}
  </div>
);

const cardData = (variant: string, children: React.ReactNode) => {
  if (variant === 'onDate') {
    return (
      <>
        {children}
        <Illustrations variant="check" color='secondary' size='small'/>
      </>
    );
  }
  if (variant === 'overdue') {
    return (
      <>
        {children}
        <Illustrations variant="cancel" color='error' size='small'/>
      </>
    );
  } else {
    return (
      <>
        {children}
        <Illustrations variant="warn" color='warn' size='small'/>
      </>
    );
  }
};
