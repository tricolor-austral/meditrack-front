import { cva } from 'class-variance-authority';
import { Title } from '../Title';
import { Text } from '../Text';
import React from 'react';
import { Icon } from '../icons';

const ActivityStyle = cva(
  'bg-white border-2 rounded-2xl flex justify-between p-2 items-center',
  {
    variants: {
      color: {
        primary: 'border-primary',
        secondary: 'border-secondary',
        failure: 'border-red',
      },
    },
  }
);

const IllustrationStyle = cva('p-2 rounded-lg', {
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      failure: 'bg-red',
    },
  },
});

interface ActivityProps {
  color: 'primary' | 'secondary' | 'failure';
  illustrationVariant: any;
  title: string;
  time: string;
  unit: string;
}

export const Activity: React.FC<ActivityProps> = ({
  color,
  illustrationVariant,
  title,
  time,
  unit,
}) => {
  return (
    <div className={ActivityStyle({ color })}>
      <div className="flex p-2 gap-2 items-center">
        <div className={IllustrationStyle({ color })}>
          <Icon variant={illustrationVariant} size="small" color="white" />
        </div>
        <Title order="h1">{title}</Title>
      </div>
      <div className="flex gap-2 items-baseline">
        <Title order="h1">{time}</Title>
        <Text variant="body1Bold">{unit}</Text>
      </div>
    </div>
  );
};
