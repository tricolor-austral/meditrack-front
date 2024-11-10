import { cva } from 'class-variance-authority';
import React from 'react';
import { Icon } from '../icons';

const prescriptionCards = cva(
  'rounded-md border-2 bg-white shadow-md flex justify-between align-middle px-[18px] py-[20px] text-black',
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
        <div className={'text-secondary'}>
          <Icon variant="check" color="secondary" />
        </div>
      </>
    );
  }
  if (variant === 'overdue') {
    return (
      <>
        {children}
        <Icon variant="cancel" color="error" />
      </>
    );
  } else {
    return (
      <>
        {children}
        <Icon variant="warn" color="warn" />
      </>
    );
  }
};
