import { useState } from 'react';
import { DateCards } from '../components/DateCards';
import { Activity } from '../components/Activity';
import { Navbar } from '../components/Navbar';
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Icon } from '../components/Icons';
import Logo from '../assets/logo.svg';
import {UpcomingCard} from "../components/UpcomingCard";
import d2 from '../assets/doctors/d2.svg';

const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState('Home');
    const [selectedDate, setSelectedDate] = useState('Wed 18/09');

    const dateOptions = [
        { day: 'Mon', date: '16/09', value: 'Mon 16/09' },
        { day: 'Tue', date: '17/09', value: 'Tue 17/09' },
        { day: 'Wed', date: '18/09', value: 'Wed 18/09' },
        { day: 'Thu', date: '19/09', value: 'Thu 19/09' },
        { day: 'Fri', date: '20/09', value: 'Fri 20/09' },
    ];

    const activities = [
        { color: 'primary' as const, icon: 'walk', title: 'Run', time: '10', unit: 'min' },
        { color: 'secondary' as const, icon: 'pill', title: 'Roacutan', time: '1', unit: 'pill' },
        { color: 'failure' as const, icon: 'meditate', title: 'Meditation', time: '15', unit: 'min' },
        { color: 'primary' as const, icon: 'walk', title: 'Walk', time: '30', unit: 'min' },
        { color: 'secondary' as const, icon: 'pill', title: 'Vitamin D', time: '1', unit: 'pill' },
        { color: 'failure' as const, icon: 'meditate', title: 'Yoga', time: '45', unit: 'min' },
        { color: 'primary' as const, icon: 'walk', title: 'Run', time: '10', unit: 'min' },
        { color: 'secondary' as const, icon: 'pill', title: 'Roacutan', time: '1', unit: 'pill' },
        { color: 'failure' as const, icon: 'meditate', title: 'Meditation', time: '15', unit: 'min' },
    ];

    const navbarOptions = [
        { label: 'Home', icon: 'home' as const },
        { label: 'Medics', icon: 'medic' as const },
        { label: 'Prescriptions', icon: 'prescriptions' as const },
        { label: 'Calendar', icon: 'calendar' as const },
    ];

    return (
        <div className="p-4 max-w-md mx-auto bg-white min-h-screen">
            <header className="flex items-center justify-between mb-4 mt-2">
                <img src={Logo} alt="Logo" className="h-12 cursor-pointer" />
                <div className="text-center flex-grow">
                    <Title color={'#61A5C2'} order="h1">Hey, John!</Title>
                </div>
                <Icon variant={'logout'} />
            </header>
            <Text variant="body1">Upcoming schedule</Text>
            <UpcomingCard
                name={'Dr. John Doe'}
                speciality={'Dermatologist'}
                date={'10:00 AM'}
                imgSrc={d2}
            />
            <section className="flex justify-between mb-4 gap-2 max-w-[90vw] overflow-scroll">
                {dateOptions.map((date) => (
                    <DateCards
                        key={date.value}
                        variant={selectedDate === date.value ? 'filled' : 'outlined'}
                        onClick={() => setSelectedDate(date.value)}
                        day={date.day}
                        date={date.date}
                    />
                ))}
            </section>

            <section className="mb-4 flex flex-col gap-3 max-h-[430px] overflow-scroll">
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

            <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-center">
                <Navbar options={navbarOptions} selected={selectedTab} onChange={setSelectedTab} />
            </footer>
        </div>
    );
};

export default HomePage;
