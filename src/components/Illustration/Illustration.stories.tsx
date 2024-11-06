import { ComponentStory, ComponentMeta } from '@storybook/react';
import Illustrations from './index'; // Ajusta la ruta según la ubicación de tu componente

export default {
    title: 'Components/Illustrations',
    component: Illustrations,
    argTypes: {
        variant: {
            control: { type: 'select' },
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
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        alt: {
            control: 'text',
        },
    },
} as ComponentMeta<typeof Illustrations>;

const Template: ComponentStory<typeof Illustrations> = (args) => <Illustrations {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'book',
    size: 'medium',
    alt: 'Book icon',
};

export const Small = Template.bind({});
Small.args = {
    variant: 'calendar',
    size: 'small',
    alt: 'Calendar icon',
};

export const Large = Template.bind({});
Large.args = {
    variant: 'check',
    size: 'large',
    alt: 'Check icon',
};
