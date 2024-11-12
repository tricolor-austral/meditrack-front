import React, { useState } from 'react';
import {MedicContact} from "../components/MedicContact";
import {MedicOption} from "../components/MedicOption";
import {Input} from "../components/Input";
import {Icon} from "../components/icons";


const medics = [
  { name: 'Lisa Track', specialty: 'Nutritionist' },
  { name: 'Emily Brown', specialty: 'Dermatologist' },
  { name: 'James Wilson', specialty: 'Pediatrician' },
  { name: 'Olivia Martinez', specialty: 'Psychiatrist' },
  { name: 'Noah Lee', specialty: 'Ophthalmologist' },
  { name: 'Lisa Track', specialty: 'Nutritionist' },
  { name: 'Emily Brown', specialty: 'Dermatologist' },
  { name: 'James Wilson', specialty: 'Pediatrician' },
  { name: 'Olivia Martinez', specialty: 'Psychiatrist' },
  { name: 'Noah Lee', specialty: 'Ophthalmologist' },
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
            {filteredMedics.map((medic, index) => (
                <MedicOption name={medic.name} imgSrc={''}  specialty={medic.specialty}/>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SearchPage;
