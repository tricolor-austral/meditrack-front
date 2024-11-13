import { UpcomingCard } from './index.tsx';
import { StoryObj } from '@storybook/react';
import d2 from '../../assets/doctors/d2.svg';


const meta = {
    title: 'Components/UpcomingCard',
    component: UpcomingCard,
    tags: ['autodocs'],
    parameters: {
        controls: {
            expanded: true,
        },
    },
    args: {
        name: 'Dr. Raymond Shaw',
        imgSrc: d2,
        speciality: 'Cardiologist',
        date: 'Nov 24, 9:00 AM'
    },
};

export default meta;

type Story = StoryObj<typeof UpcomingCard>;

export const Default: Story = {
    args: {
        name: 'Dr. Raymond Shaw',
        imgSrc: d2,
        speciality: 'Cardiologist',
        date: 'Nov 24, 9:00 AM'
    }
}