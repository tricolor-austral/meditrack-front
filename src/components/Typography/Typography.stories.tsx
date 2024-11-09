import Typography from './index';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Typography> = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    parameters: {
        controls: {
            expanded: true,
        },
    },
    argTypes: {
        font: {
            options: ['h1', 'h2', 'h3', 'subtitle', 'bb1', 'br1', 'bb2', 'br2', 'b3', 'b4'],
            control: { type: 'select' },
            description: 'Choose the font style for typography component',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'h1' },
            },
        },
        children: {
            control: 'text',
            description: 'Text content of the Typography component',
            table: {
                type: { summary: 'string' },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Definición de historias
export const Heading1: Story = {
    args: {
        font: 'h1',
        children: 'Heading 1',
    },
};

export const Heading2: Story = {
    args: {
        font: 'h2',
        children: 'Heading 2',
    },
};

export const Heading3: Story = {
    args: {
        font: 'h3',
        children: 'Heading 3',
    },
};
