import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import { Text } from '../components/Text';

const medics = [
  { name: 'Lisa Track', specialty: 'Nutritionist' },
  { name: 'Emily Brown', specialty: 'Dermatologist' },
  { name: 'James Wilson', specialty: 'Pediatrician' },
  { name: 'Olivia Martinez', specialty: 'Psychiatrist' },
  { name: 'Noah Lee', specialty: 'Ophthalmologist' },
];

const FavoritesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedics = medics.filter(medic =>
    medic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medic.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative mt-4 mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-100 text-gray-700"
        />
        <Icon
          variant="filter_outlined"
          size="small"
          color="gray"
          className="ml-2 cursor-pointer"
        />
      </div>

      <div className="space-y-3 px-4">
        {filteredMedics.map((medic, index) => (
          <div
            key={index}
            className="flex items-center p-3 rounded-lg shadow-sm bg-white cursor-pointer"
          >
            <Icon variant="medic" size="small" color="gray" className="mr-4"/>
            <div className="flex flex-col flex-1">
              <Text className="font-medium text-black">{medic.name}</Text>
              <Text className="text-sm text-gray-500">{medic.specialty}</Text>
            </div>
            <Icon variant="right_arrow" size="small" className="text-gray-400"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
