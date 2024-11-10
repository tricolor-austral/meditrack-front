import {MedicCard} from "./index.tsx";
import {StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/MedicCard',
    component: MedicCard,
    tags: ['autodocs'],
    parameters: {
        controls: {
        expanded: true,
        },
    },
    args: {
        name: 'Dr. John Doe',
        imgSrc: 'https://randomuser.me/api/portraits',
        desc:
            'Dr. John Doe is a highly experienced and respected cardiologist with over a decade of dedicated practice in the field of cardiology. Throughout his 10-year career, he has gained extensive expertise in diagnosing and treating a wide range of cardiovascular conditions, from hypertension and arrhythmias to complex cases of heart disease. ',
        rating: '4.5/5',
    }
};

export default meta;
type Story = StoryObj<typeof MedicCard>;

export const Default: Story = {
    args: {
        name: 'Dr. John Doe',
        imgSrc: 'https://randomuser.me/api/portraits',
        desc:
            'Dr. John Doe is a highly experienced and respected cardiologist with over a decade of dedicated practice in the field of cardiology. Throughout his 10-year career, he has gained extensive expertise in diagnosing and treating a wide range of cardiovascular conditions, from hypertension and arrhythmias to complex cases of heart disease. ',
        rating: '4.5/5',
    },
};
