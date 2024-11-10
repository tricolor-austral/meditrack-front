import { PrescriptionCards } from './index.tsx';
import { StoryObj } from '@storybook/react';
import { Title } from '../Title';

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
    children: (
      <>
        <Title order="h2">24/08/2025</Title>
        <Title order="h2">Paracetamol</Title>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof PrescriptionCards>;

export const Default: Story = {
  args: {
    variant: 'onDate',
    children: (
      <>
        <Title order="h2">24/08/2025</Title>
        <Title order="h2">Paracetamol</Title>
      </>
    ),
  },
};
