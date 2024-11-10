import Avatar from '@mui/material/Avatar';
import { Title } from '../Title';
import { Text } from '../Text';
import React from 'react';
import { Icon } from '../icons';

interface MedicContactProps {
  name: string;
  email: string;
  imgSrc: string;
}

export const MedicContact: React.FC<MedicContactProps> = ({
  name,
  email,
  imgSrc,
}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-md space-x-4">
      <Avatar src={imgSrc} alt={name} className="w-16 h-16 rounded-md" />
      <div className="flex-1">
        <Title className="text-lg font-bold text-gray-800">{name}</Title>
        <div className="flex items-center space-x-2 mt-1">
          <div className="p-0.5 bg-blue-100 rounded-md">
            <Icon variant="mail" size="small" color="primary" />
          </div>
          <Text className="text-sm text-gray-500">{email}</Text>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="p-2 bg-blue-100 rounded-md">
          <Icon variant="calendar" size="small" color="primary" />
        </div>
        <div className="p-2 bg-blue-100 rounded-md">
          <Icon variant="trash" size="small" color="primary" />
        </div>
      </div>
    </div>
  );
};
