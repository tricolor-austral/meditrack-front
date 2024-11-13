import { useState } from 'react';
import { DateCards } from '../components/DateCards';
import { Activity } from '../components/Activity';
import { Navbar } from '../components/Navbar';
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Icon } from '../components/Icons';
import Logo from '../assets/logo.svg';
import Clock from '../assets/icons/clock.svg';
import Avatar from "@mui/material/Avatar";
import d3 from '../assets/doctors/d3.svg';

const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState('Home');
    const [selectedDate, setSelectedDate] = useState('Mon 16/09');

    const dateOptions = [
        { day: 'Mon', date: '16/09', value: 'Mon 16/09' },
        { day: 'Tue', date: '17/09', value: 'Tue 17/09' },
        { day: 'Wed', date: '18/09', value: 'Wed 18/09' },
        { day: 'Thu', date: '19/09', value: 'Thu 19/09' },
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
            <div className="bg-secondary rounded-lg p-4 flex items-center gap-4 mb-4 mt-2 cursor-pointer justify-between">
                <div className="text-base flex flex-col gap-2">
                    <Text color={'white'} variant="body1Bold">Dr. Raymond Shaw</Text>
                    <Text color={'white'} variant="body2">Cardiologist</Text>
                    <div className="flex gap-2 px-2 rounded-md items-center bg-white">
                        <img style={{height: '12px'}} src={Clock} alt={''}/>
                        <Text color={'gray'}  variant="body1">Nov 24, 9:00 AM</Text>
                    </div>
                </div>
                <div>
                    <Avatar src={d3} alt="Avatar" sx={{ width: 80, height: 80 }} />
                </div>
            </div>

            <section className="flex justify-between mb-4 gap-2">
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
