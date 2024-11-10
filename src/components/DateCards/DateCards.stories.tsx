import {DateCards} from "./index.tsx";
import {Text} from "../Text";
import {StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/DateCards',
    component: DateCards,
    tags: ['autodocs'],
    parameters: {
        controls: {
        expanded: true,
        },
    },
    argTypes: {
        variant: {
        options: ['filled', 'outlined'],
        control: { type: 'select' },
        },
    },
    args: {
        variant: 'filled',
        children: (
            <>
            <Text variant='body2'>Mon</Text>
                <Text variant='body2'>16/09</Text>
            </>
        ),
    },
};

export default meta;
type Story = StoryObj<typeof DateCards>;

export const Default: Story = {
    args: {
        variant: 'filled',
        children: (
            <>
            <Text variant='body2'>Mon</Text>
                <Text variant='body2'>16/09</Text>
            </>
        ),
    },
};
