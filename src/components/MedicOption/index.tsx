import Avatar from '@mui/material/Avatar';
import { Text } from '../Text';
import React from 'react';

interface MedicOptionProps {
    name: string;
    imgSrc: string;
    specialty: string;
}

export const MedicOption: React.FC<MedicOptionProps> = ({
                                                            name,
                                                            specialty,
                                                            imgSrc,
                                                        }) => {
    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md space-x-4 w-full max-w-md">
            <Avatar src={imgSrc} alt={name} />
            <div className={'flex flex-col gap-1'}>
                <Text color={'black'} variant={'body1Bold'}>{name}</Text>
                <Text color={'gray'} variant={'body2'}>{specialty}</Text>
            </div>
        </div>
    );
};
