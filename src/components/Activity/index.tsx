import { cva } from 'class-variance-authority';
import React from 'react';
import { Icon } from '../Icons';
import { Title } from '../Title';
import { Text } from '../Text';

const ActivityStyle = cva(
    'bg-white border-2 rounded-lg flex justify-between p-1 items-center cursor-pointer',
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

const IllustrationStyle = cva('p-1 rounded-md', {
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
    className?: string;
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
            <div className="flex p-1 gap-3 items-center">
                <div className={IllustrationStyle({ color })}>
                    <Icon variant={illustrationVariant} size="small" color="white" />
                </div>
                <Title order="h4" className="text-sm">{title}</Title>
            </div>
            <div className="flex gap-1 items-baseline text-sm">
                <Title order="h4" className="text-lg">{time}</Title>
                <Text variant="body3">{unit}</Text>
            </div>
        </div>
    );
};
