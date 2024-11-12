import React, { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Navbar } from '../components/Navbar';
import FavoritesPage from './FavoritesPage';
import SearchPage from './SearchPage';
import {Title} from "../components/Title";

const MedicsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Favorites');
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
        <div className={'flex justify-center mb-2'}>
            <Title order={'h1'}>Medics</Title>
        </div>
      <Tabs options={tabs} selected={selectedTab} onChange={setSelectedTab} />

      {selectedTab === 'Favorites' ? <FavoritesPage /> : <SearchPage />}

      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-2 flex justify-center">
        <Navbar options={navbarOptions} selected={navbarTab} onChange={setNavbarTab}/>
      </footer>
    </div>
  );
};

export default MedicsPage;
