import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import {Input} from "../components/Input";
import {MedicContact} from "../components/MedicContact";

const medics = [
    { name: 'Liza Trays', email: 'lizatrass@mail.com', specialty: 'Cardiologist' },
    { name: 'Ale Spielb', email: 'ale@mail.com', specialty: 'Neurologist' },
    { name: 'Liam Johnson', email: 'l.johnson@mail.com', specialty: 'Orthopedic' },
    { name: 'Michael Brown', email: 'm..brown@mail.com', specialty: 'Dermatologist' },
    { name: 'Liza Trays', email: 'lizatrass@mail.com', specialty: 'Cardiologist' },
    { name: 'Ale Spielb', email: 'ale@mail.com', specialty: 'Neurologist' },
    { name: 'Liam Johnson', email: 'l.johnson@mail.com', specialty: 'Orthopedic' },
    { name: 'Michael Brown', email: 'm..brown@mail.com', specialty: 'Dermatologist' },
];
const FavoritesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedics = medics.filter(medic =>
    medic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medic.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 mt-4">
        <div className="flex items-center gap-2">
            <Input
                placeholder="Search"
                value={searchTerm}
                onChange={() => {
                }}
                showIcon
            />
            <Icon variant={'filter_outlined'} className={'mt-2'} onClick={() => {
            }}/>
        </div>
        <div className={'max-h-[600px] overflow-scroll flex-col gap-4 flex mb-[80px]'}>
            {filteredMedics.map((medic, index) => (
                <MedicContact name={medic.name} email={medic.email} imgSrc={''}/>
            ))}
        </div>
    </div>
  );
};

export default FavoritesPage;
