import Illustrations from './index';
import type {StoryObj} from "@storybook/react";


const meta = {
    title: 'Components/Illustrations',
    component: Illustrations,
    tags: ['autodocs'],
    parameters: {
        controls: {
            expanded: true,
        },
    },
    args: {
        variant: 'book',
        size: 'medium',
        alt: 'Book icon',
    },
    argTypes: {
        variant: {
            options: [
                'book',
                'calendar',
                'cancel',
                'check',
                'clock',
                'color_star',
                'ep_black',
                'filter_filled',
                'filter_outlined',
                'left_arrow',
                'location',
                'mail',
                'medti',
                'pill',
                'plus_sign',
                'right_arrow',
                'star',
                'trash',
                'walk',
                'warn',
            ],
            control: { type: 'select' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        alt: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Illustrations>;

// Definición de historias
export const Default: Story = {
    args: {
        variant: 'book',
        size: 'medium',
        alt: 'Book icon',
    },
};

export const Small: Story = {
    args: {
        variant: 'calendar',
        size: 'small',
        alt: 'Calendar icon',
    },
};

export const Large: Story = {
    args: {
        variant: 'check',
        size: 'large',
        alt: 'Check icon',
    },
};
