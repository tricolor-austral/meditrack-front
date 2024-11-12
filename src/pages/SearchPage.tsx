import React, { useState } from 'react';
import {MedicOption} from "../components/MedicOption";
import {Input} from "../components/Input";
import {Icon} from "../components/Icons";
import d1 from '../assets/doctors/d1.svg';
import d2 from '../assets/doctors/d2.svg';
import d3 from '../assets/doctors/d3.svg';
import d4 from '../assets/doctors/d4.svg';
import d5 from '../assets/doctors/d5.svg';
import d6 from '../assets/doctors/d6.svg';
import d7 from '../assets/doctors/d7.svg';
import d8 from '../assets/doctors/d8.svg';

const medics = [
  { name: 'Liza Trays', email: 'lizatrass@mail.com', specialty: 'Cardiologist', imgSrc: d1 },
  { name: 'Ale Spielb', email: 'ale@mail.com', specialty: 'Neurologist', imgSrc: d2 },
  { name: 'Deyverson', email: 'deyverson@mail.com', specialty: 'Pediatrician', imgSrc: d3 },
  { name: 'Liam Johnson', email: 'l.johnson@mail.com', specialty: 'Orthopedic', imgSrc: d4 },
  { name: 'Michael Brown', email: 'm..brown@mail.com', specialty: 'Dermatologist', imgSrc: d5 },
  { name: 'Emily Stone', email: 'emily.stone@mail.com', specialty: 'Ophthalmologist', imgSrc: d6 },
  { name: 'George Smith', email: 'george.smith@mail.com', specialty: 'ENT Specialist', imgSrc: d7 },
  { name: 'Olivia Lee', email: 'olivia.lee@mail.com', specialty: 'Gastroenterologist', imgSrc: d8 },
  { name: 'Sophia Brown', email: 'sophia.brown@mail.com', specialty: 'Endocrinologist', imgSrc: d1 },
  { name: 'Henry Adams', email: 'henry.adams@mail.com', specialty: 'Nephrologist', imgSrc: d2 },
  { name: 'Lily Foster', email: 'lily.foster@mail.com', specialty: 'Rheumatologist', imgSrc: d3 },
  { name: 'Jack Wilson', email: 'jack.wilson@mail.com', specialty: 'Pulmonologist', imgSrc: d4 },
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
          <div className={'max-h-[600px] overflow-scroll flex-col gap-4 flex mb-[80px]'}>
            {filteredMedics.map((medic) => (
                <MedicOption name={medic.name} imgSrc={medic.imgSrc}  specialty={medic.specialty}/>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SearchPage;
