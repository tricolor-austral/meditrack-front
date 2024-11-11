import { useState } from 'react';
import { DateCards } from '../components/DateCards';
import { Activity } from '../components/Activity';
import { Navbar } from '../components/Navbar';
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Icon } from '../components/Icons';
import Logo from '../assets/logo.svg';
import LogoutIcon from '../assets/icons/logout.svg';

const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState('Home');
    const [selectedDate, setSelectedDate] = useState('Mon 16/09');

    const dateOptions = [
        { label: 'Sat 15/09', value: 'Sat 15/09' },
        { label: 'Mon 16/09', value: 'Mon 16/09' },
        { label: 'Tue 17/09', value: 'Tue 17/09' },
        { label: 'Wed 18/09', value: 'Wed 18/09' },
    ];

    const activities = [
        { color: 'primary' as const, icon: 'walk', title: 'Run', time: '10', unit: 'min' },
        { color: 'secondary' as const, icon: 'pill', title: 'Roacutan', time: '1', unit: 'pill' },
        { color: 'failure' as const, icon: 'meditate', title: 'Meditation', time: '15', unit: 'min' },
        { color: 'primary' as const, icon: 'walk', title: 'Walk', time: '30', unit: 'min' },
        { color: 'secondary' as const, icon: 'pill', title: 'Vitamin D', time: '1', unit: 'pill' },
        { color: 'failure' as const, icon: 'meditate', title: 'Yoga', time: '45', unit: 'min' },
    ];

    const navbarOptions = [
        { label: 'Home', icon: 'home' as const },
        { label: 'Medics', icon: 'medic' as const },
        { label: 'Prescriptions', icon: 'prescriptions' as const },
        { label: 'Calendar', icon: 'calendar' as const },
    ];

    return (
        <div className="p-2 max-w-md mx-auto bg-gray-50 min-h-screen">
            <header className="flex items-center justify-between px-6 mb-4">
                <img src={Logo} alt="Logo" className="h-8 cursor-pointer" />
                <div className="text-center flex-grow">
                    <Title order="h2">Hey, John!</Title>
                    <Text variant="body1">Upcoming schedule</Text>
                </div>
                <img src={LogoutIcon} alt="Logout" className="h-6 cursor-pointer" />
            </header>

            <div className="bg-primary rounded-lg p-4 flex items-center gap-4 mx-4 mb-4 cursor-pointer">
                <Icon variant="medic" size="large" color="white"/>
                <div className="text-base">
                    <Text variant="body1Bold" className="text-lg">Raymond Shaw</Text>
                    <Text variant="body1" className="text-base">Cardiologist</Text>
                    <Text variant="body1" className="text-sm">Nov 24, 9:00 AM</Text>
                </div>
            </div>

            <section className="flex justify-between px-4 mb-4">
                {dateOptions.map((date) => (
                    <DateCards
                        key={date.value}
                        variant={selectedDate === date.value ? 'filled' : 'outlined'}
                        onClick={() => setSelectedDate(date.value)}
                        className="w-[85px] h-[75px] cursor-pointer"
                    >
                        <Text variant="body3Bold">{date.label}</Text>
                    </DateCards>
                ))}
            </section>

            <section className="px-4 mb-4 flex flex-col gap-3">
                {activities.map((activity, index) => (
                    <Activity
                        key={index}
                        color={activity.color}
                        illustrationVariant={activity.icon}
                        title={activity.title}
                        time={activity.time}
                        unit={activity.unit}
                        className="py-2 px-4 text-base"
                    />
                ))}
            </section>

            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-2 flex justify-center">
                <Navbar options={navbarOptions} selected={selectedTab} onChange={setSelectedTab} />
            </footer>
        </div>
    );
};

export default HomePage;
