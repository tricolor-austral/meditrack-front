import { MedicOption } from './index.tsx';
import { StoryObj } from '@storybook/react';
import d2 from '../../assets/doctors/d2.svg';

const meta = {
    title: 'Components/MedicOption',
    component: MedicOption,
    tags: ['autodocs'],
    parameters: {
        controls: {
            expanded: true,
        },
    },
    args: {
        name: 'Dr. John Doe',
        imgSrc: d2,
        specialty: 'Nutritionist',
    },
};

export default meta;

type Story = StoryObj<typeof MedicOption>;

export const Default: Story = {
    args: {
        name: 'Dr. John Doe',
        imgSrc: d2,
        specialty: 'Nutritionist',
    },
};
