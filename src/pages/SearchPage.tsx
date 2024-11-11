import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import { Text } from '../components/Text';

const medics = [
  { name: 'Liza Trays', email: 'lizatrass@mail.com' },
  { name: 'Alexia Spielberg', email: 'ale@mail.com' },
  { name: 'Deyverson', email: 'deyverson@mail.com' },
  { name: 'Liam Johnson', email: 'liam.johnson@mail.com' },
  { name: 'Michael Brown', email: 'michael.brown@mail.com' },
];

const SearchPage: React.FC = () => {
  const [searchTerm] = useState('');

  const filteredMedics = medics.filter(medic =>
    medic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medic.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 px-4 mt-4"> {/* Margin applied here */}
      {filteredMedics.map((medic, index) => (
        <div
          key={index}
          className="flex items-center p-4 rounded-lg shadow-sm bg-white cursor-pointer gap-4"
        >
          <Icon variant="medic" size="large" color="primary" className="mr-4 relative top-3" />

          <div className="flex flex-col flex-1">
            <Text className="font-medium text-black">{medic.name}</Text>
            <div className="flex items-center text-sm text-gray-500 gap-2">
              <Icon variant="mail" size="small" color="text-primary-dark" />
              <Text>{medic.email}</Text>
            </div>
          </div>

          <div className="flex gap-3">
            <Icon variant="calendar" size="small" color="text-primary-dark" />
            <Icon variant="trash" size="small" color="text-primary-dark" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
