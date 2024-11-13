import Avatar from '@mui/material/Avatar';
import { Title } from '../Title';
import { Text } from '../Text';
import React from 'react';
import { Icon } from '../Icons';

interface MedicCardProps {
  name: string;
  imgSrc: string;
  desc: string;
  rating: string;
}

export const MedicCard: React.FC<MedicCardProps> = ({
  name,
  imgSrc,
  desc,
  rating,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-md shadow-md bg-white p-4">
      <div className="flex justify-between content-center">
        <div className="flex gap-4">
          <Avatar alt={name} src={imgSrc} />
          <Title order="h2">{name}</Title>
        </div>
        <div className="flex gap-2 items-center">
          <Icon variant="star" color="text-yellow" size="small" />
          <Title order="h2">{rating}</Title>
        </div>
      </div>
      <Text variant="body1">{desc}</Text>
    </div>
  );
};
