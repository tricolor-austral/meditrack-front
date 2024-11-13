import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import {Input} from "../components/Input";
import {MedicContact} from "../components/MedicContact";
import d1 from '../assets/doctors/d1.svg';
import d4 from '../assets/doctors/d4.svg';
import d5 from '../assets/doctors/d5.svg';
import d6 from '../assets/doctors/d6.svg';
import d7 from '../assets/doctors/d7.svg';
import d8 from '../assets/doctors/d8.svg';

const medics = [
  { name: 'Liza Trays', email: 'lizatrass@mail.com', specialty: 'Cardiologist', imgSrc: d1 },
  { name: 'Liam Johnson', email: 'l.johnson@mail.com', specialty: 'Orthopedic', imgSrc: d4 },
  { name: 'Michael Brown', email: 'm..brown@mail.com', specialty: 'Dermatologist', imgSrc: d5 },
  { name: 'Emily Stone', email: 'emily.stone@mail.com', specialty: 'Ophthalmologist', imgSrc: d6 },
  { name: 'George Smith', email: 'george.smith@mail.com', specialty: 'ENT Specialist', imgSrc: d7 },
  { name: 'Olivia Lee', email: 'olivia.lee@mail.com', specialty: 'Gastroenterologist', imgSrc: d8 },
];

const FavoritesPage: React.FC = () => {
  const [searchTerm] = useState('');

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
            {filteredMedics.map((medic) => (
                <MedicContact name={medic.name} email={medic.email} imgSrc={medic.imgSrc}/>
            ))}
        </div>
    </div>
  );
};

export default FavoritesPage;
