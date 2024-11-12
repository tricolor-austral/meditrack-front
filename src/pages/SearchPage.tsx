import React, { useState } from 'react';
import {MedicContact} from "../components/MedicContact";
import {MedicOption} from "../components/MedicOption";
import {Input} from "../components/Input";
import {Icon} from "../components/icons";

const medics = [
  { name: 'Liza Trays', email: 'lizatrass@mail.com', specialty: 'Cardiologist' },
  { name: 'Ale Spielb', email: 'ale@mail.com', specialty: 'Neurologist' },
  { name: 'Deyverson', email: 'deyverson@mail.com', specialty: 'Pediatrician' },
  { name: 'Liam Johnson', email: 'l.johnson@mail.com', specialty: 'Orthopedic' },
  { name: 'Michael Brown', email: 'm..brown@mail.com', specialty: 'Dermatologist' },
  { name: 'Liza Trays', email: 'lizatrass@mail.com', specialty: 'Cardiologist' },
  { name: 'Ale Spielb', email: 'ale@mail.com', specialty: 'Neurologist' },
  { name: 'Deyverson', email: 'deyverson@mail.com', specialty: 'Pediatrician' },
  { name: 'Liam Johnson', email: 'l.johnson@mail.com', specialty: 'Orthopedic' },
  { name: 'Michael Brown', email: 'm..brown@mail.com', specialty: 'Dermatologist' },
];


const SearchPage: React.FC = () => {
  const [searchTerm] = useState('');

  const filteredMedics = medics.filter(medic =>
    medic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medic.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
        <div className="space-y-4 mt-4"> {/* Margin applied here */}
          <div className="flex items-center gap-2">
            <Input
                placeholder="Search"
                value={searchTerm}
                onChange={() => {}}
                showIcon
            />
            <Icon variant={'filter_outlined'} className={'mt-2'} onClick={() => {}}/>
          </div>
          <div className={'max-h-[600px] overflow-scroll flex-col gap-4 flex'}>
            {filteredMedics.map((medic, index) => (
                <MedicOption name={medic.name} imgSrc={''}  specialty={medic.specialty}/>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SearchPage;
