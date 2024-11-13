import { CalendarCard } from './index.tsx';
import { StoryObj } from '@storybook/react';


const meta = {
    title: 'Components/CalendarCard',
    component: CalendarCard,
    tags: ['autodocs'],
    parameters: {
        controls: {
            expanded: true,
        },
    },
    args: {
        title: 'Ibupirac 600gr',
        subtitle: 'Medication',
        date: '10 oct 12:20 hs',
    },
};

export default meta;

type Story = StoryObj<typeof CalendarCard>;

export const Default: Story = {
    args: {
        title: 'Ibupirac 600gr',
        subtitle: 'Medication',
        date: '10 oct 12:20 hs',
    },
};
