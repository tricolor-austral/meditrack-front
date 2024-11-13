import { MedicContact } from './index.tsx';
import { StoryObj } from '@storybook/react';
import d2 from '../../assets/doctors/d2.svg';


const meta = {
  title: 'Components/MedicContact',
  component: MedicContact,
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  args: {
    name: 'Dr. John Doe',
    imgSrc: d2,
    email: 'john@doe.com',
  },
};

export default meta;

type Story = StoryObj<typeof MedicContact>;

export const Default: Story = {
  args: {
    name: 'Dr. John Doe',
    imgSrc: d2 as string,
    email: 'john@doe.com',
  },
};
