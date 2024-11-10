import { MedicOption } from './index.tsx';
import { StoryObj } from '@storybook/react';

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
        imgSrc: 'https://randomuser.me/api/portraits',
        specialty: 'Nutritionist',
    },
};

export default meta;

type Story = StoryObj<typeof MedicOption>;

export const Default: Story = {
    args: {
        name: 'Dr. John Doe',
        imgSrc: 'https://randomuser.me/api/portraits',
        specialty: 'Nutritionist',
    },
};
