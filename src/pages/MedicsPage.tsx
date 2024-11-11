import React, { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Icon } from '../components/Icons';
import { Navbar } from '../components/Navbar';
import { Text } from '../components/Text';

const medics = [
    { name: 'Lisa Track', specialty: 'Nutritionist' },
    { name: 'Lisa Track', specialty: 'Nutritionist' },
    { name: 'Lisa Track', specialty: 'Nutritionist' },
    { name: 'Lisa Track', specialty: 'Nutritionist' },
    { name: 'Lisa Track', specialty: 'Nutritionist' },
];

const MedicsPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('Favorites');
    const [searchTerm, setSearchTerm] = useState('');
    const [navbarTab, setNavbarTab] = useState('Medics');

    const tabs = [
        { label: 'Favorites', value: 'Favorites' },
        { label: 'Search', value: 'Search' },
    ];

    const navbarOptions = [
        { label: 'Home', icon: 'home' as const },
        { label: 'Medics', icon: 'medic' as const },
        { label: 'Prescriptions', icon: 'prescriptions' as const },
        { label: 'Calendar', icon: 'calendar' as const },
    ];

    return (
        <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="text-center mb-4">
                <h1 className="text-2xl font-semibold">Medics</h1>
            </header>

            {/* Tabs for Favorites and Search */}
            <Tabs options={tabs} selected={selectedTab} onChange={setSelectedTab} />

            {/* Search Bar */}
            <div className="relative mt-4 mb-6">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-10 py-2 rounded-lg border border-gray-300 focus:outline-none bg-gray-100 text-gray-700"
                />
            </div>

            {/* List of Medics */}
            <div className="space-y-3 px-4">
                {medics.map((medic, index) => (
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

            {/* Navbar */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-2 flex justify-center">
                <Navbar options={navbarOptions} selected={navbarTab} onChange={setNavbarTab}/>
            </footer>
        </div>
    );
};

export default MedicsPage;
