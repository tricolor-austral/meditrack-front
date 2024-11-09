import {PrescriptionCards} from "./index.tsx";
import {StoryObj} from "@storybook/react";
import Typography from "../Typography";

const meta = {
    title: 'Components/PrescriptionCards',
    component: PrescriptionCards,
    tags: ['autodocs'],
    parameters: {
        controls: {
            expanded: true,
        },
    },
    argTypes: {
        variant: {
            options: ['onDate', 'overdue', 'upcoming'],
            control: { type: 'select' },
        },
    },
    args: {
        variant: 'onDate',
    },
};

export default meta;
type Story = StoryObj<typeof PrescriptionCards>;

export const Default: Story = {
    args: {
        children: <>
            <Typography font='br1'>12/10/2024</Typography>
            <Typography font="subtitle">Prescription Card</Typography>
        </>,
    },
};

